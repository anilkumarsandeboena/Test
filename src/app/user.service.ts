import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiName="https://jsonplaceholder.typicode.com/"
  constructor(private http: HttpClient) { }
  registerUser(inputData:any){
    const body = inputData;
    const httpOptions = this.getCommonHeaders();
    return this.http.post(this.apiName + "users", body, httpOptions);
  }
  private getCommonHeaders() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return httpOptions;
  }
  getUsers(){
    return this.http.get(this.apiName + "users");
  }
  deleteUser(id:any){
    return this.http.delete(this.apiName + `users/${id}`);
  }
}
