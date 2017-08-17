import {Pipe} from '@angular/core';

@Pipe({
    name:'revese'
})
export class ReversePipe{
    transform(value:string){
        return value.split("").reverse().join("");
    }
}