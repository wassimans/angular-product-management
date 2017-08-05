import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
      const id = +route.url[1].path;
      if (isNaN(id) || id < 1) {
        alert('Invalid product ID');
        // redirect user to product list
        this.router.navigate(['/products']);
        // abort current navigation
        return false;
      }
      return true;
    }
}
