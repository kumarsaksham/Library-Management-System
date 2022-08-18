import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl="http://localhost:8080/login";

  constructor(private http :HttpClient) { }

  loginUser(user :User):Observable<object>{
    console.log("service"+user);
    return this.http.post(`${this.baseUrl}`,user);
  }

}







// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor() { }
// }
