import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  addUser(userform: NgForm){
    console.log(this.user);
    console.log(typeof(this.user));
    this.userService.addUser(this.user).subscribe( res =>{
      userform.reset();
      alert("User added successfully");
      this.router.navigate(['/libraryadmin/users']);
    },
    error => console.log(error));
  }

}
