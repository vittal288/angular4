import {Ingrediant} from '../shared/ingrediants.model';
export class Recipe{ 
    public name:string;
    public description:string;
    public imagePath:string;
    public ingrediant:Ingrediant[];


    constructor(name:string,desc:string,imagePath:string,ingrediant:Ingrediant[]){       
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingrediant= ingrediant;
    }
}