import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {

  constructor( private bookService: BookService ) { }

  ngOnInit(): void {
    this.getAllIssuedBooks();
  }

  books: Book[] | undefined;
  userId:number = JSON.parse(localStorage.getItem("user") || '{}').userId;
  

  private getAllIssuedBooks(){
    
    this.bookService.getAllIssuedBooks(this.userId).subscribe(res => {
      console.log(res);
      this.books= res;
    });
  }

}


