import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {BlogService} from "../blog/blog.service";
import {Blog} from "../blog/blog.class";

@Component({
  selector: 'app-create-blog-entry',
  templateUrl: './create-blog-entry.component.html',
  styleUrls: ['./create-blog-entry.component.css']
})
export class CreateBlogEntryComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  constructor(private fb: FormBuilder, private blogService: BlogService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      headline: ['', Validators.required],
      subheadline: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  sendBlogEntry(){
    console.log("send BlogEntry");
    let blog = new Blog(this.myForm.value.headline, this.myForm.value.subheadline, this.myForm.value.content);
    console.log(blog);
    this.blogService.addBlog(blog);
  }

}
