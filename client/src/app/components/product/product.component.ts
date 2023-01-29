import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  id;
  constructor(MyActivated : ActivatedRoute , private productService :ProductsService)
  {
    this.id = MyActivated.snapshot.params['id'];
  }

  product;

  ngOnInit(): void {
    this.productService.GetProductById(this.id).subscribe(
      (suc)=>{this.product=suc;},
      (err)=>{console.log(err);}
    )
  }

}
