import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {

  books: Book[] | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllAvailableBooks();
  }

  private getAllAvailableBooks(){
    this.bookService.getAllAvailableBooks().subscribe(res => {
      console.log(res);
      this.books = res;
    });
  }

}
