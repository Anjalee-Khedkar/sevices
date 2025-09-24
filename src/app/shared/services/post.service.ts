import { Injectable } from "@angular/core";
import { Ipost } from "../models/posts";



@Injectable()
  

  
export  class postService{
    postsArr = [
  {
    "userId": 1,
    "id": 1,
    "title": "The Art of Code",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Exploring the Unknown",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Journey Through the Stars",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Life in Pixels",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Echoes of Tomorrow",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "Whispers in Code",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "Fragments of Infinity",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "Digital Horizons",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "The Network Within",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "Code and Chaos",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facere voluptas odio earum quisquam optio, quia unde laudantium esse id tenetur, deserunt aspernatur quasi distinctio architecto deleniti modi error nisi?"
  }
]
   

 fetchAllposts():Array<Ipost>{
    return this.postsArr    
 }

} 