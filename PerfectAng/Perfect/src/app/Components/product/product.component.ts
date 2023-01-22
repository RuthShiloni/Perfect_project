import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Classes/Products';
import { Router ,ActivatedRoute } from '@angular/router';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() categoryId !: number 
  allProducts !: Product[]
  constructor(private productServ: ProductService , private myRouter : Router) { }

  ngOnInit(): void {
    this.productServ.getProductsByCate(this.categoryId).subscribe(
      data => {
        console.log(data)
        this.allProducts = data
      },
      err => {
        console.log(err)
      }
    )
  }

  showDetails(product : Product) {
    var id = product.id
    this.myRouter.navigate(["/singleP",id])
    console.log(product.id)
  }
}
