import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/Model/book';
import { User } from 'src/app/Model/user';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-borrowed-books-by-user',
  templateUrl: './borrowed-books-by-user.component.html',
  styleUrls: ['./borrowed-books-by-user.component.css']
})
export class BorrowedBooksByUserComponent implements OnInit {

  constructor( private bookService: BookService ) { }

  ngOnInit(): void {
  }

  borrowedBooksByUser: Book[] | undefined;
  userId!: number;

  getBorrowedBooksByUser(userIdform: NgForm){
    this.bookService.getBorrowedBooksByUser(this.userId).subscribe(res => {
      this.borrowedBooksByUser= res;
    });
  }

}
