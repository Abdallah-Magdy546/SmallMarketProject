import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public productsService : HttpClient) { }
  BaseUrl = "http://localhost:5077/api/product";
  GetAllProducts ()
  {
   return this.productsService.get(this.BaseUrl);
  }
  GetProductById (id)
  {
    return this.productsService.get(this.BaseUrl +"/"+id)
  }
  AddProduct (product :{name:string , price:any ,amountInStore : any})
  {
    return this.productsService.post(this.BaseUrl , product)
  }
  DeleteProduct (id)
  {
    return this.productsService.delete(this.BaseUrl +"/"+id)
  }

}
