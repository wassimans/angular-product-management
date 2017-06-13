import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: IProduct[], filterBy: string): IProduct[] {
    // check if 'filterBy' is provided
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    // do transformation based on whether 'filterBy' is provided or not
    return filterBy ? value.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
