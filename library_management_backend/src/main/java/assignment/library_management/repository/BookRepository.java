package assignment.library_management.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import assignment.library_management.model.Book;
import assignment.library_management.model.BorrowedBooks;
import assignment.library_management.model.User;

@Repository
public class BookRepository extends SimpleJpaRepository<Book, Integer> {
	@Autowired
	private EntityManager entityManager;
	
	public BookRepository( EntityManager em) {
		super(Book.class, em);
	}
	
	public List<Book> getAllBooks() {
		Query q = entityManager.createNativeQuery("SELECT * FROM BOOK", Book.class);
		List<Book> books = q.getResultList();
		return books;
	}

	public List<Book> getBorrowedBooks(int userId) {
		Query q = entityManager.createNativeQuery("SELECT * FROM BOOK AS B ,BORROWED_BOOKS AS BB WHERE B.BOOK_ID = BB.BOOK_ID AND BB.USER_ID = " + userId, Book.class);
		List<Book> borrowedbooks = q.getResultList();
		return borrowedbooks;
	}

	public List<Book> getOverDueBooks(int userId) {
		Query q = entityManager.createNativeQuery("SELECT * FROM BOOK AS B ,BORROWED_BOOKS AS BB WHERE B.BOOK_ID = BB.BOOK_ID AND BB.RETURN_DATE < NOW() AND BB.USER_ID = " + userId, Book.class);
		List<Book> overDueBooks = q.getResultList();
		return overDueBooks;
	}

	public List<Book> getAllBorrowedBooks() {
		Query q = entityManager.createNativeQuery("SELECT * FROM BOOK AS B ,BORROWED_BOOKS AS BB WHERE B.BOOK_ID = BB.BOOK_ID AND BB.RETURNED = 0", Book.class);
		List<Book> borrowedBooks = q.getResultList();
		return borrowedBooks;
	}

	public List<User> getAllStudentsByBookName(String bookName) {
		Query q = entityManager.createNativeQuery("SELECT * FROM USER AS U, BORROWED_BOOKS AS BB, BOOK AS B WHERE BB.USER_ID = U.USER_ID AND BB.RETURNED = 0 AND B.BOOK_ID = BB.BOOK_ID AND B.BOOK_NAME = " + bookName, User.class);
		List<User> users = q.getResultList();
		return users;
	}

	

	

}
