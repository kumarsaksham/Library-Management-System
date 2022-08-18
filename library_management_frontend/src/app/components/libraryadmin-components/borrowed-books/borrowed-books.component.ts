import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {
  
  constructor( private bookService: BookService ) { }

  ngOnInit(): void {
    this.getAllBorrowedBooks();
  }

  borrowedBooks: Book[] | undefined;

  private getAllBorrowedBooks(){
    this.bookService.getAllBorrowedBooks().subscribe(res => {
      console.log(res);
      this.borrowedBooks= res;
    });
  }

}
