import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/posts';
import { postService } from '../../services/post.service';

@Component({
  selector: 'app-posts1',
  templateUrl: './posts1.component.html',
  styleUrls: ['./posts1.component.scss']
})
export class Posts1Component implements OnInit {    
     postsArr :Array <Ipost> = []
  
  // postsService= new postService()

  constructor(private _postsService:postService ) { }

  ngOnInit(): void {

   this.postsArr=  this._postsService.fetchAllposts()
  }

   onLastPostremove(){
    this.postsArr.pop()
   }

}
