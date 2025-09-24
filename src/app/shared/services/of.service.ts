import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {
  of$= of (10,20,30,31,81,41,)
  .pipe(
   map((num:number)=>num*2)
  )

  constructor() { }
}
 
