import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-talenthire-ind',
  templateUrl: './talenthire-ind.component.html',
  styleUrls: ['./talenthire-ind.component.css']
})
export class TalenthireIndComponent implements OnInit {
  posts: object;

  constructor(private peopleService: PeopleService) { }



  ngOnInit() {

    this.peopleService.fetchPeople().subscribe(
      peopleService => this.posts = peopleService
    ) ;

  }

}
