import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080";

  getAllUsers(): Observable<User[]>{
    console.log("user service : getUsers() ")
    return this.httpClient.get<User[]>(`${this.baseURL}/libraryadmin/users`);
  }

  addUser(user: User): Observable<Object>{
    return this.httpClient.post<User>(`${this.baseURL}/libraryadmin/adduser`, user);
  }

  getStudentByBookName(bookName: String) {
    return this.httpClient.get<User[]>(`${this.baseURL}/libraryadmin/getstudentbybookname?bookName="${bookName}"`);
  }

  deleteUser(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/libraryadmin/removeuser?userId=${userId}`);
  }
}
