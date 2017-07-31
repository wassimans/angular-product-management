import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor() {}

    canActivate(): boolean {
      return true;
    }
}
