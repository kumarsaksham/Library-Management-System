import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../Model/book';
import { BookService } from '../../../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] | undefined;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  private getAllBooks(){
    this.bookService.getAllBooks().subscribe(res => {
      console.log(res);
      this.books = res;
    });
  }

  
  deleteBook(bookId: number){
    this.bookService.deleteBook(bookId).subscribe(res => {
      this.getAllBooks();
    })
  }

}
