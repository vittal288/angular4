import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortAlphabetically'
})

export class SortAlphabeticallyPipe implements PipeTransform {
    transform(value: any[], keyName: string) {       
        if (value.length === 0 && value === null) {
            return value;
        } else {
            return value.sort(function(a, b) {
                return a[keyName].toLowerCase().localeCompare(b[keyName].toLowerCase());
            });
        }
    }
}

