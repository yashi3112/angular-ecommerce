import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: any[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id);
    this.ngOnInit();
  }


}
