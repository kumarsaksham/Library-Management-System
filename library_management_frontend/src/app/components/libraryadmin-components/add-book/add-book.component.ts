import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = new Book();

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void { }

  addBook(bookform: NgForm){
    this.bookService.addBook(this.book).subscribe( res =>{
      bookform.reset();
      alert("Book added");
      this.router.navigate(['/libraryadmin/books']);
    },
    error => console.log(error));
  }
}
