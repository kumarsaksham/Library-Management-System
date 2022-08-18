import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-student-by-bookname',
  templateUrl: './student-by-bookname.component.html',
  styleUrls: ['./student-by-bookname.component.css']
})
export class StudentByBooknameComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

  bookName!: String;
  users: User[] | undefined;

  getStudentByBookName(bookNameform: NgForm){
    this.userService.getStudentByBookName(this.bookName).subscribe(res => {
      console.log("res");
      console.log(res);
      this.users= res;
      bookNameform.reset();
    });
  }

}
