import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Blog} from "./blog.class";
import {Comment} from './comments';

@Injectable()
export class BlogService {

    private comments: Comment[] = [
        {
            author: 'Catharina',
            date: new Date(),
            text: 'Schöner Beitrag!'
        },
        {
            author: 'Jenny',
            date: new Date(),
            text: 'Hat mir sehr gefallen!'
        }
    ]
    private blogs: Blog[] = [
    new Blog('Angular 2 ist besser', 'man kann es leicher verstehen', 'loremnaglkdfglkdfnlkldfglkdfg', 'Niklas', new Date(), this.comments),
    new Blog('Angular 3 ist besser', 'man kann es noch leicher verstehen', 'loremnaglkdfglkdfnlkldfglkdfg', 'Niklas', new Date(), this.comments)
  ];

  constructor(private http: Http) {
    this.fetchData().subscribe(
      (data: Blog[]) => {
        if(data == null) {
            //this.blogs = data;
            return;
        }
      }
    );
  }

  storeData() {
    const body = JSON.stringify(this.blogs);
    console.log(body);
    const headers = new Headers({
      'ContentType': 'application/json'
    });
    return this.http.put('https://tk-intranet.firebaseio.com/blogs.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://tk-intranet.firebaseio.com/blogs.json')
      .map((response: Response) => response.json())

  }

  getBlogs() {
    return this.blogs;
  }

  addBlog(blog: Blog){
    if(!this.blogs) {
      this.blogs = [];
    }
    console.log(this.blogs);
    this.blogs.push(blog);
    this.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
