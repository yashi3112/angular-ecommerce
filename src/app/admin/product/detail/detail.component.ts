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

  addForm: FormGroup;
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      sellStatus: new FormControl(true)
    });


  }

  addDetail() {
    this.addForm.value
    console.log('this.addForm.value', this.addForm.value);
    this.productService.addProduct(this.addForm.value);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
