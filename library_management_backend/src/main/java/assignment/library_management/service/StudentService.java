package assignment.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import assignment.library_management.model.Book;
import assignment.library_management.model.BorrowedBooks;
import assignment.library_management.repository.BookRepository;
import assignment.library_management.repository.BorrowedBooksRepository;

@Service
public class StudentService {
	@Autowired
	BookRepository bookRepository;
	
	@Autowired
	BorrowedBooksRepository borrowedBooksRepository;

	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	public List<Book> getBorrowedBooks(int userId) {
		return bookRepository.getBorrowedBooks(userId);
	}

	public List<Book> getOverDueBooks(int userId) {
		return bookRepository.getOverDueBooks(userId);
	}

	public BorrowedBooks borrowBook(BorrowedBooks borrowedBook) {
		return borrowedBooksRepository.save(borrowedBook);
	}
}
