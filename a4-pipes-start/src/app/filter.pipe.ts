import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false //execute the pipe, whenever data changes on the pipe :be catiuos to turning this property to false because it will sligtly reduces the performance of the app 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
