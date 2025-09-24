import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/posts';
import { postService } from '../../services/post.service';

@Component({
  selector: 'app-posts2',
  templateUrl: './posts2.component.html',
  styleUrls: ['./posts2.component.scss']
})
export class Posts2Component implements OnInit {
 postsArr :Array <Ipost> = []
postsService= new postService()

  constructor() { }

  ngOnInit(): void {

      this.postsArr=  this.postsService.fetchAllposts()
  }

}
