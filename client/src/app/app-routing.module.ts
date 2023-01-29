import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"" ,redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/:id",component:ProductComponent},
  {path:"addProduct",component:AddproductComponent},
  {path:"**",component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
