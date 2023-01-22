import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductComponent } from './Components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NavigationComponent } from './Components/navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';

import { NavigationComponent } from './Components/Navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
