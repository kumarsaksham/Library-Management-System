package assignment.library_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import assignment.library_management.model.Book;
import assignment.library_management.model.User;
import assignment.library_management.service.LibraryAdminService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/libraryadmin")
public class LibraryAdminController {
	@Autowired
	LibraryAdminService adminService;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return adminService.getAllUsers();
	}
	
	@PostMapping("/adduser")
	public User addUser(@RequestBody User user) {
		return adminService.addUser(user);
	}
	
	@DeleteMapping("/removeuser")
	public boolean removeUser(int userId) {
		return adminService.removeUser(userId);
	}
	
	@GetMapping("/books")
	public List<Book> getAllBooks(){
		return adminService.getAllBooks();
	}
	
	@PostMapping("/addbook")
	public Book addBook(@RequestBody Book book) {
		return adminService.addBook(book);
	}
	
	@DeleteMapping("/removebook")
	public boolean removeBook(int bookId) {
		return adminService.removeBook(bookId);
	}

	
	
	@GetMapping("/getallborrowedbooks")
	public List<Book> getAllBorrowedBooks(){
		return adminService.getAllBorrowedBooks();
	}
	
	@GetMapping("/getborrowedbooks")
	public List<Book> getBorrowedBooksByUserId(int userId){
		return adminService.getBorrowedBooksByUserId(userId);
	}
	
	@GetMapping("/getstudentbybookname")
	public List<User> getAllStudentsByBookName(String bookName) {
		return adminService.getAllStudentsByBookName(bookName);
	}
}
