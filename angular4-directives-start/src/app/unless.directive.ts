import { Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition:Boolean){
    if(!condition){
        this.vcRef.createEmbeddedView(this.templeRef);
    }else{
        this.vcRef.clear();
    }
  }
              //which template to replace     //where to replace
  constructor(private templeRef:TemplateRef<any>,private vcRef:ViewContainerRef) { 

  }

}
