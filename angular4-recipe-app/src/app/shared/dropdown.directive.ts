import {Directive,ElementRef,Renderer2,HostListener,HostBinding} from '@angular/core';
@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective{

    //First approach
    // private toggleFlg =false;
    // constructor(private elemRef:ElementRef,private renderer:Renderer2){

    // }
    // @HostListener('click') click(eventData:Event){ 
    //     this.toggleFlg = !this.toggleFlg;      
    //     if(this.toggleFlg){
    //         this.renderer.addClass(this.elemRef.nativeElement,'open');            
    //     }else{
    //         this.renderer.removeClass(this.elemRef.nativeElement,'open')             
    //     }
        
    // }


    //2nd apporach 
    //access the attribute of component 
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
    
}