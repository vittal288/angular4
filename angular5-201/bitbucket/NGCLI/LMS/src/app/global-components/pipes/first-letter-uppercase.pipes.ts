import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'firstLetterUppercase'
})
export class FirstLetterUpperCasePipe implements PipeTransform {
    transform(value) {
        if (value.length === 0 || value === null) {
            return value;
        } else {
            const words = value.split(' ');
            words.forEach((element, i) => {
                words[i] = element.replace(element.charAt(0), element.charAt(0).toUpperCase())
            });
            return words.join(' ');
        }
    }
}
