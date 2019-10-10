import { Injectable } from '@angular/core';
import {TalentHireData } from './talenthiredata';
import { EMPLOYES } from './talenthirelist' ;
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  getemployes(): Observable<TalentHireData[]> {
    return of (EMPLOYES);

  }
  // getEmployes(): Observable<TalentHireData[]> {
  //   return of(EMPLOYES) ;
  // }

  constructor() { }
}
