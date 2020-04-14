import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get('https://reqres.in/api/users') //reqres is website use to grab data free api
  }

  helloService()
  {
    return "Angular Service";
  }
}