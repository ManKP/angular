import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product'
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]

  constructor(private protectService: ProductService) { }

  ngOnInit() {
    this.protectService.getAllProducts().subscribe((res: Product[]) =>{
      this.products = res
      console.log(this.products)
    })
  }

  deleteProduct(id) {
    this.protectService.deleteProduct(id).subscribe(res =>{
      this.ngOnInit()
    })
  }
}
