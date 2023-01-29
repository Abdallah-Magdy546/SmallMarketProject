import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private Getproducts:ProductsService){}
  products;


  ngOnInit(): void {
    this.Getproducts.GetAllProducts().subscribe(
      (suc)=>{this.products=suc;},
      (err)=>{console.log(err);}
    )
  }


}
