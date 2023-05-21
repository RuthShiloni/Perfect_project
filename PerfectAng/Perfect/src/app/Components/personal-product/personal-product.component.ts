import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from 'src/app/Services/users.service';
import { PersonalProduct } from 'src/app/Classes/PersonalProduct';
import { CartService } from 'src/app/Services/cart.service';
import { ShoppingCart } from 'src/app/Classes/ShoppingCart';
import { PersonalProductService } from 'src/app/Services/personal-product.service';
import { ColorsService } from 'src/app/Services/colors.service';
import { Color } from 'src/app/Classes/Color';
import { HttpClient } from '@angular/common/http';
import { CreamsService } from 'src/app/Services/creams.service';
import { Cream } from 'src/app/Classes/Cream';
import { Shape } from 'src/app/Classes/Shape';
import { ShapeService } from 'src/app/Services/shape.service';
import { Layer } from 'src/app/Classes/Layer';
import { LayerService } from 'src/app/Services/layer.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-personal-product',
  templateUrl: './personal-product.component.html',
  styleUrls: ['./personal-product.component.scss'],
})
export class PersonalProductComponent implements OnInit {
  allColors: Color[] = [];
  allCream: Cream[] = [];
  allShapes: Shape[] = [];
  allLayers: Layer[] = [];
  selected = new FormControl('valid', [Validators.required]);

  selectFormControl = new FormControl('valid', [Validators.required]);

  nativeSelectFormControl = new FormControl('valid', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  personlProduct!: PersonalProduct;
  personalProductForm: FormGroup;

  constructor(
    private http: HttpClient,
    private CreamsServ: CreamsService,
    private ColorsServ: ColorsService,
    private userServ: UsersService,
    private shapeServ: ShapeService,
    private layerServ: LayerService,
    private personlProductserv: PersonalProductService
  ) {
    this.personalProductForm = new FormGroup({
      //OrderId: new FormControl(),
      ShapeId: new FormControl('', [Validators.required]),
      ColorId1: new FormControl('', [Validators.required]),
      CreamId: new FormControl('', [Validators.required]),
      LayersId: new FormControl('', [Validators.required]),
      Picture: new FormControl(''),
      Text: new FormControl('',),
      Price: new FormControl('', ),
      // Quantity: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      ColorId2: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // debugger
    this.CreamsServ.GetAllCreams().subscribe(
      (data) => {
        this.allCream = data;
        console.log(this.allCream);
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );

    this.shapeServ.GetAllShapes().subscribe((data) => {
      this.allShapes = data;
    });
    this.layerServ.GetAllLayers().subscribe((data) => {
      this.allLayers = data;
    });
    this.ColorsServ.GetAllColors().subscribe(
      (data) => {
        if (data) this.allColors = data;
        console.log(this.allColors);
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  uploadFinished(urlImg:any){
    this.personalProductForm.value.Picture=urlImg.dbPath;
    debugger;
  }
  onSubmit() {
    if (this.userServ.GetCurrentUser() == null) {
      alert('Please register!');
      return;
    }
    debugger
    var p = this.personalProductForm.value;
    var sumPrice =
      this.allShapes.find((e) => e.id == p.ShapeId)?.price! +
      this.allColors.find((e) => e.id == p.ColorId1)?.price! +
      this.allColors.find((e) => e.id == p.ColorId2)?.price! +
      this.allCream.find((e) => e.id == p.CreamId)?.price!+
      this.allLayers.find((e)=>e.id==p.LayersId)?.price!;
    this.personlProduct = new PersonalProduct(
      this.userServ.GetCurrentUser().id,
     
      p.ShapeId,
      p.ColorId1,
      p.CreamId,
      p.LayersId,
      p.Picture,
      p.Text,
      sumPrice,
      p.Quantity,
      p.ColorId2,
      undefined
    );
    console.log(this.personlProduct);
    this.personlProductserv.AddPersonalP(this.personlProduct).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

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
