import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number, args?: any): any {
    return `$${price.toFixed(2)}`;
  }

}
