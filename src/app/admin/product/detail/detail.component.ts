import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  addForm: FormGroup;
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.addForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      sellStatus: new FormControl(true)
    });
    if (this.id) {
      const product = this.productService.getProductById(this.id);
      console.log('product', product);
      this.addForm.setValue(product);

    }

  }

  addDetail() {
    if (this.id) {
      this.productService.updateProduct(this.id, this.addForm.value);
      this.router.navigate(['../../'], { relativeTo: this.route });
      return;
    }
    console.log('this.addForm.value', this.addForm.value);
    this.productService.addProduct(this.addForm.value);
    this.router.navigate(['../'], { relativeTo: this.route });

  }


}
