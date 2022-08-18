import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { User } from '../../Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userData :any;
  user: User = new User();

  constructor(private loginservice : LoginService,private router: Router) { }

  ngOnInit(): void {

  }
  
  UserLogin(){
    console.log(`LogIn details`);
    console.log(this.user);

    this.loginservice.loginUser(this.user).subscribe((data)=>{
      this.userData = data;
      
      console.log("Saving Data in local storage");
      localStorage.setItem("user",JSON.stringify(this.userData));

      
      if(this.userData.userType===0)
        this.router.navigate(['/libraryadmin'])
      else if(this.userData.userType===1){
        this.router.navigate(['/student']);
      }
    },error=>alert("Invalid Credentials, Enter correct details")
    )
  }
}







// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
