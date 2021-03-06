import { Component, OnInit } from '@angular/core';
import {BlogService} from "./blog.service";
import {Blog} from "./blog.class";
import {Comment} from './comments';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogService: BlogService) { }


  ngOnInit() {
      this.blogs = this.blogService.getBlogs();

 /*     this.blogService.fetchData().subscribe(
      (data: Blog[]) => {
        this.blogs = data;
        console.log(this.blogs);
      }
    ); */
  }

}
