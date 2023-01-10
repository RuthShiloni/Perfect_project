import { Component, OnInit , Input } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Classes/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 @Input() categoryId : number = 2
 allProducts ! : Product[]
  constructor(private productServ : ProductService) { }

  ngOnInit(): void {
     this.productServ.getProductsByCate(this.categoryId).subscribe(
       data =>{
        console.log(data)
        this.allProducts = data
       },
       err=>{
        console.log(err)
       }
     )
  }

}
