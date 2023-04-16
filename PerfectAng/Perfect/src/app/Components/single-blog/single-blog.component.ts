import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  
  blogsId !: number
  ngOnInit(): void {
  this.route.params.subscribe(
      data =>{
       this.blogsId = data.blogId
      }
    )
  }

}
