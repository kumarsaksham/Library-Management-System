import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddBookComponent } from './components/libraryadmin-components/add-book/add-book.component';
import { AddUserComponent } from './components/libraryadmin-components/add-user/add-user.component';
import { BooksComponent } from './components/libraryadmin-components/books/books.component';
import { LibraryadminComponent } from './components/libraryadmin-components/libraryadmin/libraryadmin.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student-components/student/student.component';
import { UsersComponent } from './components/libraryadmin-components/users/users.component';
import { BorrowedBooksComponent } from './components/libraryadmin-components/borrowed-books/borrowed-books.component';
import { BorrowedBooksByUserComponent } from './components/libraryadmin-components/borrowed-books-by-user/borrowed-books-by-user.component';
import { StudentByBooknameComponent } from './components/libraryadmin-components/student-by-bookname/student-by-bookname.component';
import { AvailableBooksComponent } from './components/student-components/available-books/available-books.component';
import { IssuedBooksComponent } from './components/student-components/issued-books/issued-books.component';
import { OverdueBooksComponent } from './components/student-components/overdue-books/overdue-books.component';
import { BorrowBookComponent } from './components/student-components/borrow-book/borrow-book.component';


const routes: Routes = [
  { path:"", component: LoginComponent },
  { path:"login", redirectTo:"" },

  { path:"libraryadmin", component: LibraryadminComponent },
  { path:"libraryadmin/books", component: BooksComponent },
  { path:"libraryadmin/addbook", component: AddBookComponent },
  { path:"libraryadmin/users", component: UsersComponent },
  { path:"libraryadmin/adduser", component: AddUserComponent },
  { path:"libraryadmin/borrowedbooks", component: BorrowedBooksComponent},
  { path:"libraryadmin/borrowedbooksbyuser", component: BorrowedBooksByUserComponent},
  { path:"libraryadmin/studentbybookname", component: StudentByBooknameComponent},

  { path:"student", component: StudentComponent },
  { path:"student/books", component: AvailableBooksComponent },
  { path:"student/borrowedbooks", component: IssuedBooksComponent },
  { path:"student/overduebooks", component: OverdueBooksComponent },
  { path:"student/borrowbook", component: BorrowBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
