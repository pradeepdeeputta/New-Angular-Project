import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { TalentHireData } from '../talenthiredata';


@Component ({
  selector: 'app-talenthire-us',
  templateUrl: './talenthire-us.component.html',
  styleUrls: ['./talenthire-us.component.css']
})
export class TalenthireUsComponent implements OnInit {

  constructor(private myservice: MyserviceService ) { }
  property: TalentHireData[] ;
  // little = TalentHireData[ ] ;
  // getTalenthireData:void; {
  //   this.talenthiredata = this.myservice.getS();
  // }
  // getEmployes(): void {
  //   this.myservice.getEmployes().subscribe(little => this.little = little);

  // }
  getemployes(): void {
    this.property = this.myservice.getemployes();
  }


ngOnInit() {
    this.getemployes() ;

  }

}
