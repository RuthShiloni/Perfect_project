import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Classes/Order';
import { PersonalProduct } from 'src/app/Classes/PersonalProduct';
import { ProductToOrder } from 'src/app/Classes/ProductToOrder';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { CartService } from 'src/app/Services/cart.service';
import { OrdersService } from 'src/app/Services/orders.service';
import { PersonalProductService } from 'src/app/Services/personal-product.service';
import { ProductToOrderService } from 'src/app/Services/product-to-order.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {


  constructor(private orderServ: OrdersService, private userServ: UsersService, private cartServ: CartService,
    private productToOrderS: ProductToOrderService, private ppServ: PersonalProductService,
    private  pToOrderServ : ProductToOrderService) { }

  //monthControl = new FormControl('', Validators.required);
  month: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  years: number[] = []
  currentYear !: number
  newOrder !: Order
  Order !: Order
  productToOrder !: ProductToOrder
  refreshCart: ShoppingCart[] = []
  showCredit: boolean = true
  confirmOrder: boolean = false
  product : ShoppingCart[] = this.cartServ.productsToOrder
  pp : PersonalProduct[] = this.cartServ.personalPToOrder
  isDisable : boolean = false
  sumPrice : number = this.cartServ.sumOrder
  deliveryP : number = this.cartServ.deliveryPrice
  date : Date = new Date()
  ngOnInit(): void {
    console.log(this.product)
    this.currentYear = new Date().getFullYear()
    this.years.push(this.currentYear)
    for (let i = this.currentYear; i < this.currentYear + 10; i++) {
      this.years.push(i)
    }
    console.log(this.years)
  }
  ConfirmOrder() {
    this.isDisable = true
    //הוספת הזמנה חדשה
    this.orderServ.AddNewOrder().subscribe(
      res => {
          this.Order = res
        //הוספת הפריטים שהוזמנו אל טבלת מוצרים להזמנה
        if (this.userServ.GetCurrentUser() != null) {
          //מעבר על טבלת מוצרים
          this.cartServ.productsToOrder.forEach(element => {
            this.productToOrder = new ProductToOrder(this.Order.id, element.productId, element.quantity, element.idSize)
            //הוספה לטבלה
            debugger
            this.productToOrderS.AddProductToOrder(this.productToOrder).subscribe(
              res => {
                this.cartServ.productsToOrder.forEach(element => {
                  this.cartServ.DeleteCart(element.id).subscribe()
                })
              }, err => { console.log(err) }
            )
          });
          //מעבר על מוצרים אישיים
          this.cartServ.personalPToOrder.forEach(element => {
            element.orderId = res.id
            //עידכון
            this.ppServ.UpdatePersonalP(element.id, element).subscribe(data => { }, err => { console.log(err) })
          });
          console.log(res)
        }
        else {
          this.cartServ.GetUnRegisterCart().forEach(element => {
            this.productToOrder = new ProductToOrder(res.id, element.productId, element.quantity, element.idSize)
            //הוספה לטבלה
            this.productToOrderS.AddProductToOrder(this.productToOrder).subscribe(res => {
              this.cartServ.SetUnRegisterCart(this.refreshCart)
            }, err => { console.log(err) })
          });  
        }
        this.cartServ.SetNumItem(0)
        this.confirmOrder = true
        this.showCredit = false

      }, err => { console.log(err) }
    )


  }




}

