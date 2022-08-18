package assignment.library_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import assignment.library_management.model.Book;
import assignment.library_management.model.BorrowedBooks;
import assignment.library_management.service.StudentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/student")
public class StudentController {
	@Autowired
	StudentService studentService;
	
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return studentService.getAllBooks();
	}
	
	@GetMapping("/borrowedbooks")
	public List<Book> getBorrowedBooks(@RequestParam int userId){
		return studentService.getBorrowedBooks(userId);
	}
	

	@GetMapping("/overduebooks")
	public List<Book> getOverDueBooks(int userId){
		return studentService.getOverDueBooks(userId);
	}
	
	@PostMapping("/borrowbook")
	public BorrowedBooks borrowBook(@RequestBody BorrowedBooks borrowedBook) {
		return studentService.borrowBook(borrowedBook);
	}
	
}
