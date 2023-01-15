import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Classes/Products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
 product !: Product
 productId !: any
  constructor(private route : ActivatedRoute ,private productServ : ProductService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.productId = params
      console.log(params)
    });
    this.productServ.GetProductById(this.productId).subscribe(
      data=>{
        alert("Hello")
        console.log(data)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
