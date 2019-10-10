import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  fetchPeople() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }
}
