import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  products: IProduct[];

  constructor(private productService: ProductService) { }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit() {
      this.products = this.productService.getProducts();
  }

  onNotify(message: string): void {
      this.pageTitle = 'Product List: ' + message;
  }

}
