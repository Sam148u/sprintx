import { HttpClient } from '@angular/common/http';
import { ParseSourceFile } from '@angular/compiler';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http= inject(HttpClient)

  register(formValues: any){
    return this.http.post("http://localhost:3000/api/register",
    {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      password: formValues.password
    }
  )
  }
  login(formValues: any){
    return this.http.post("http://localhost:3000/api/login",{
      email: formValues.email,
      password: formValues.password
    })
  }
  constructor() { }
}
