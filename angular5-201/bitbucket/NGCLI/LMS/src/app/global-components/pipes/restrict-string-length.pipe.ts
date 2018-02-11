import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'restrictStringLength'
})

export class RestrictStringLengthPipe implements PipeTransform {
    transform(value: string, keyName: number) {
        if (value.length === 0 && value === null && value === '') {
            return value;
        } else {
            return value.substr(0, keyName);
        }
    }
}