import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Model/book';
import { User } from '../Model/user';
import { BorrowedBooks } from '../Model/borrowed-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080";

  // For Library Admin
  getAllBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/libraryadmin/books`);
  }

  addBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/libraryadmin/addbook`, book);
  }

  getAllBorrowedBooks() {
    return this.httpClient.get<Book[]>(`${this.baseURL}/libraryadmin/getallborrowedbooks`);
  }

  getBorrowedBooksByUser(userId: number) {
    return this.httpClient.get<Book[]>(`${this.baseURL}/libraryadmin/getborrowedbooks?userId=${userId}`);
  }

  deleteBook(bookID: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/libraryadmin/removebook?bookId=${bookID}`);
  } 


  // FOR Student
  getAllAvailableBooks() {
    return this.httpClient.get<Book[]>(`${this.baseURL}/student/books`);
  }

  getAllIssuedBooks(userId: number) {
    return this.httpClient.get<Book[]>(`${this.baseURL}/student/borrowedbooks?userId=${userId}`);
  }
  
  getOverdueBooks(userId: number): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/student/overduebooks?userId=${userId}`);
  }
  
  addBookToUser(borrowBoook: BorrowedBooks): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/student/borrowbook`, borrowBoook);
  }
}
