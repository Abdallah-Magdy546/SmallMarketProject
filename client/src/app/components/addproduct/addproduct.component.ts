import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  constructor( private AddingProductService : ProductsService)
  {}
  _name;
  _price;
  _NumInStock;

  ngOnInit(): void
  {
  }
  OnClick(n , p , s)
  {
   let product = { name : n , price :p , amountInStore : s}
    this.AddingProductService.AddProduct(product).subscribe(
      (suc)=>{console.log(suc);},
      (err)=>{console.log(err);}
    )
  }

}
