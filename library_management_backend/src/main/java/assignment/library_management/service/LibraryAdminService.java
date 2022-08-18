package assignment.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import assignment.library_management.model.Book;
import assignment.library_management.model.User;
import assignment.library_management.repository.BookRepository;
import assignment.library_management.repository.UserRepository;

@Service
public class LibraryAdminService {
	@Autowired
	UserRepository userRepository;
	@Autowired
	BookRepository bookRepository;
	
	public List<User> getAllUsers() {
		return userRepository.getAllUsers();
	}

	public User addUser(User user) {;
		user.setActive(true);
		return userRepository.save(user);
	}

	public boolean removeUser(int userId) {
		try {
			User user = userRepository.getById(userId);
			user.setActive(false);
			userRepository.save(user);
			return true;
		}
		catch(Exception e) {
			return false;
		}
	}

	public Book addBook(Book book) {
		return bookRepository.save(book);
	}

	public boolean removeBook(int bookId) {
		try {
			bookRepository.delete(bookRepository.getById(bookId));
			return true;
		}
		catch(Exception e) {
			return false;
		}
	}

	public List<Book> getAllBorrowedBooks() {
		return bookRepository.getAllBorrowedBooks();
	}

	public List<Book> getBorrowedBooksByUserId(int userId) {
		return bookRepository.getBorrowedBooks(userId);
	}

	
	public List<User> getAllStudentsByBookName(String bookName) {
		return bookRepository.getAllStudentsByBookName(bookName);
	}

	public List<Book> getAllBooks() {
		return bookRepository.getAllBooks();
	}
}
