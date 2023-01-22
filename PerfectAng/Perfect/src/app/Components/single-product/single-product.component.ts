import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Classes/Products';
import { SizePrice } from 'src/app/Classes/SizePrice';
import { ProductService } from 'src/app/Services/product.service';
import { SizeAndPriceService } from 'src/app/Services/size-and-price.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
 product !: Product
 productId !: any
 sizeAndPrice !: SizePrice[]
  constructor(private route : ActivatedRoute ,private productServ : ProductService ,
   private sizeAndPriceServ : SizeAndPriceService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
      this.productId = params.productId
      //console.log(this.productId)
    })
    this.productServ.GetProductById(this.productId).subscribe(
      data =>{
        console.log(data)
        this.product = data
      },
      err =>{
        console.log(err)
      }
    )
    this.sizeAndPriceServ.getSizeAndPriceByPId(this.productId).subscribe(
      data =>{
       this.sizeAndPrice = data
      },
      err =>{
        console.log(err)
      }
    )
  }
 
}
