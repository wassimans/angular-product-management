import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string;
  product: IProduct;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.pageTitle = 'Product Details';
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
