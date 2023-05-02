import { HttpClientModule } from '@angular/common/http';
import {  NgModule } from '@angular/core';
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
import {MatIconModule} from '@angular/material/icon';
import { PersonalProductComponent } from './Components/personal-product/personal-product.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import { CartComponent } from './Components/cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import { PaymentDetailsComponent } from './Components/payment-details/payment-details.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './Components/login/login.component';
import { RegulationsComponent } from './Components/regulations/regulations.component';
import { AboutComponent } from './Components/about/about.component';
import { CreditComponent } from './Components/credit/credit.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { SingleBlogComponent } from './Components/single-blog/single-blog.component';
import { UserOptionComponent } from './Components/user-option/user-option.component';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { ClubComponent } from './Components/club/club.component';
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
    PaymentDetailsComponent,
    LoginComponent,
    RegulationsComponent,
    AboutComponent,
    CreditComponent,
    BlogsComponent,
    SingleBlogComponent,
    UserOptionComponent,
    ContactUsComponent,
    ClubComponent,
    PersonalProductComponent,
    NavigationComponent,
   
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
    MatTabsModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    MatBadgeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule { }
