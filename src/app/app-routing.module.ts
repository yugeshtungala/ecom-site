import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ServicesComponent } from './pages/services/services.component';
import { LaptopsComponent } from './pages/services/laptops/laptops.component';
import { MobilesComponent } from './pages/services/mobiles/mobiles.component';
import { TelivisionComponent } from './pages/services/telivision/telivision.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"products", component:ProductsComponent},
  {path:"cart", component:CartComponent},
  {path:'services',component:ServicesComponent,
      children:[
        {path:'laptops',component:LaptopsComponent},
        {path:'laptops/:la',component:LaptopsComponent},
        
        {path:'mobiles',component:MobilesComponent},
        {path:'mobiles/:se',component:MobilesComponent},
        {path:'telivision/:t',component:TelivisionComponent},
        {path:'telivision',component:TelivisionComponent}
      ]
    }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
