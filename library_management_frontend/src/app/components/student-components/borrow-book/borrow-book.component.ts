import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BorrowedBooks } from 'src/app/Model/borrowed-books';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  constructor(private bookService:BookService, private router: Router) { }

  borrowBoook: BorrowedBooks = new BorrowedBooks();

  ngOnInit(): void { }

  addBookToUser(borrowbookform: NgForm){
    this.borrowBoook.userId = JSON.parse(localStorage.getItem('user') || '{}').userId;
    

    this.bookService.addBookToUser(this.borrowBoook).subscribe( res =>{
      borrowbookform.reset();
      this.goToBorrowedBooks();
    },
    error => console.log(error));
  }

  goToBorrowedBooks(){
    this.router.navigate(['/student/borrowedbooks']);
  }

}
