import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
//import { Params } from '@angular/router';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  public allBlogs=[
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags":[],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big</h1><p>Small text</p>",
      "description": "This is blog 2"
    }
  ]
  constructor(private _route:ActivatedRoute, private router:Router) {
    console.log("Constructor is called")
   }

  ngOnInit() {
    console.log("ngOninit called");
    let myBlogId =this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId);
    this.getSingleBlogInformation(myBlogId);
  }
  public getSingleBlogInformation(currentBlogId):any {
    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
      }
    }
    console.log(this.currentBlog);
  }

}
