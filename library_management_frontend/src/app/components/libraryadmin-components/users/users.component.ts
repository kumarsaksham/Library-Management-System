import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers(){
    this.userService.getAllUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    })
  }

  deleteUser(userId: number){
    this.userService.deleteUser(userId).subscribe(res => {
      console.log(res);
      this.getAllUsers();
    })
  }
}
