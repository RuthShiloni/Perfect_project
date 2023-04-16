import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from 'src/app/Services/users.service';
import { PersonalProduct } from 'src/app/Classes/PersonalProduct';
import { CartService } from 'src/app/Services/cart.service';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { PersonalProductService } from 'src/app/Services/personal-product.service';
import { ColorsService } from 'src/app/Services/colors.service';
import { Color } from 'src/app/Classes/Color';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-personal-product',
  templateUrl:'./personal-product.component.html',
  styleUrls: ['./personal-product.component.scss']
})

 export class PersonalProductComponent implements OnInit {
  allColors !: Color[]

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
  personlProduct!:PersonalProduct
  personalProductForm: FormGroup;
  // cart !: ShoppingCart 

 constructor(private ColorsServ :ColorsService, private userServ : UsersService,private personlProductserv : PersonalProductService) { 
  this.personalProductForm = new FormGroup({
    OrderId: new FormControl(),
    ShapeId: new FormControl(),
    ColorId1: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    CreamId: new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    LayersId: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    Pictur: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    Text: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    Price: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    Quantity: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    ColorId2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),


    //city: new FormControl('', [Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
  })
 }
 


//  items: Product[] = [];



    ngOnInit(): void {
      this.ColorsServ.GetAllColors().subscribe(
        data => {
this.allColors=data
 console.log(this.allColors)
 console.log(data)
},
err => {
  console.log(err)
}
)

 }
     

  //  addToCart(){
  //   debugger
  //   let id="";
  //   for(var i =0; i<5;i++){
  //    id+= Math.floor(Math.random() * 10); 
  //   }

  // PersonalProduct(Id: number, OrderId: number, ShapeId: number, ColorId1: number, CreamId: number, LayersId: number, Pictur: string, Text: string, Price: number, Quantity?: number | undefined, ColorId2?: number | undefined): PersonalProduct
  // import PersonalProduct

    // AddToCart(){
    //   var p=this.personalProductForm. value;
    //  if(this.userServ.GetCurrentUser() == null){
    //     alert("Please register!")
    //   }
     

    //  else{
    //   this.personlProduct = new PersonalProduct(this.userServ.GetCurrentUser().Id,
    //   p.ShapeId, p.ColorId1,p.CreamId,p.LayersId,p.Pictur,p.Text,p.Price,p.Quantity,p.ColorId2,undefined)
    //   console.log(this.personlProduct)
    //   this.personlProductserv.AddPersonalP(this.personlProduct).subscribe(
    //    data =>{
    //         console.log(data)
    //      },
    //      err =>{
    //         console.log(err)
    //      }
    //     )
    //    }
    // }
    onSubmit() {
      if (this.personalProductForm.valid) {
      var p=this.personalProductForm. value;
      if(this.userServ.GetCurrentUser() == null){
         alert("Please register!")
       }
      
      else{
       this.personlProduct = new PersonalProduct(this.userServ.GetCurrentUser().id,
       p.ShapeId, p.ColorId1,p.CreamId,p.LayersId,p.Pictur,p.Text,p.Price,p.Quantity,p.ColorId2,undefined)
       console.log(this.personlProduct)
       this.personlProductserv.AddPersonalP(this.personlProduct).subscribe(
        data =>{
             console.log(data)
          },
          err =>{
             console.log(err)
          }
         )
        }
     }
    }}
    




  //   if(this.userServ.GetCurrentUser() == null){
  //     // this.cart = new ShoppingCart(0 , productId , 1 , sizeId)
  //     // console.log(this.cart)
  //     // this.cartServ.AddToUnRegisterUserCart(this.cart);
  //     // console.log(this.cartServ.UnregisterUserCart)
  //  }
  //  else{

  //   this.personlProduct=new PersonalProduct(null,null,);
  //   this.cart = new ShoppingCart(this.userServ.GetCurrentUser().Id , productId , 1 ,sizeId)
  //   console.log(this.cart)
  //   this.cartServ.AddCart(this.cart).subscribe(
  //     data =>{
  //       console.log(data)
  //     },
  //     err =>{
  //       console.log(err)
  //     }
  //   )
  //  }
     
  //  

 


// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
  
// }

  