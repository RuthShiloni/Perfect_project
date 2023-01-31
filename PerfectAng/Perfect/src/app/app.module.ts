import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PersonalProductComponent } from './Components/personal-product/personal-product.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import {MatRadioModule} from '@angular/material/radio';
import { CartComponent } from './Components/cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import { PaymentDetailsComponent } from './Components/payment-details/payment-details.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    NavigationComponent,
    FooterComponent,
    SingleProductComponent,
    PersonalProductComponent,
    CartComponent,
    PaymentDetailsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
