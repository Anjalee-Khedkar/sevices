import { Component, OnInit } from '@angular/core';
import { OfService } from './shared/services/of.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'services';
 
   constructor(
     private _ofService: OfService
   ){}

  ngOnInit(): void {

     this._ofService.of$.subscribe(num=>{
   
      console.log(num);
     })
     
      }

     
      
  }


