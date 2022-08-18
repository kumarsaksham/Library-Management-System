import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-overdue-books',
  templateUrl: './overdue-books.component.html',
  styleUrls: ['./overdue-books.component.css']
})
export class OverdueBooksComponent implements OnInit {

  constructor( private bookService: BookService ) { }

  ngOnInit(): void {
    this.getOverdueBooks();
  }

  books: Book[] | undefined;
  userId:number = JSON.parse(localStorage.getItem("user") || '{}').userId;
  

  private getOverdueBooks(){
    
    this.bookService.getOverdueBooks(this.userId).subscribe(res => {
      console.log(res);
      this.books= res;
    });
  }

}
