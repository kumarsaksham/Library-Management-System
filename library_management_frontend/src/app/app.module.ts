import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student-components/student/student.component';
import { LibraryadminComponent } from './components/libraryadmin-components/libraryadmin/libraryadmin.component';
import { BooksComponent } from './components/libraryadmin-components/books/books.component';
import { AddBookComponent } from './components/libraryadmin-components/add-book/add-book.component';
import { UsersComponent } from './components/libraryadmin-components/users/users.component';
import { AddUserComponent } from './components/libraryadmin-components/add-user/add-user.component';
import { BorrowedBooksComponent } from './components/libraryadmin-components/borrowed-books/borrowed-books.component';
import { BorrowedBooksByUserComponent } from './components/libraryadmin-components/borrowed-books-by-user/borrowed-books-by-user.component';
import { StudentByBooknameComponent } from './components/libraryadmin-components/student-by-bookname/student-by-bookname.component';
import { AvailableBooksComponent } from './components/student-components/available-books/available-books.component';
import { IssuedBooksComponent } from './components/student-components/issued-books/issued-books.component';
import { OverdueBooksComponent } from './components/student-components/overdue-books/overdue-books.component';
import { BorrowBookComponent } from './components/student-components/borrow-book/borrow-book.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    LibraryadminComponent,
    BooksComponent,
    AddBookComponent,
    UsersComponent,
    AddUserComponent,
    BorrowedBooksComponent,
    BorrowedBooksComponent,
    BorrowedBooksByUserComponent,
    StudentByBooknameComponent,
    AvailableBooksComponent,
    IssuedBooksComponent,
    OverdueBooksComponent,
    BorrowBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
