import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private router : Router ) { }

  ngOnInit(): void {
  }
  SingleBlog(blogNum : number){
    this.router.navigate(["/singleBlog" , blogNum])
  }

}
