import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ServicesComponent } from './pages/services/services.component';
import { LaptopsComponent } from './pages/services/laptops/laptops.component';
import { MobilesComponent } from './pages/services/mobiles/mobiles.component';
import { TelivisionComponent } from './pages/services/telivision/telivision.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    CartComponent,
    ServicesComponent,
    LaptopsComponent,
    MobilesComponent,
    TelivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
