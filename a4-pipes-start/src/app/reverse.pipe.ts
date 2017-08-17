import {PipeTransform,Pipe} from '@angular/core';

@Pipe({
    name:'reverse'
})
export class ReversePipe implements PipeTransform{
    transform(value:any,propName:string){
        if(value.length === 0){
            return value
        }    
        for(var i=0;i<value.length;i++){          
            const spltArrOfItem = value[i][propName].split("");
            const reverseArrItm =  spltArrOfItem.reverse();                      
            value[i][propName]=reverseArrItm.join("");            
        }
        return value;                 
    }
}