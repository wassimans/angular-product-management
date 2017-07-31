import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private productUrl = 'api/products/products.json';
    constructor(private http: Http) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get(this.productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .catch(this.handleError)
            .do(data => console.log('ALL: ' + JSON.stringify(data)));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error!');
    }
}