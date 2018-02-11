import { 
        Directive,
        Renderer2,
        OnInit,
        ElementRef,
        HostListener,
        HostBinding,
        Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') defaultColor:string ='transparent';
  @Input() highLightColor='blue';
  
  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elemtRef:ElementRef,private renderer:Renderer2) {

   }

  ngOnInit(){
    //this.renderer.setStyle(this.elemtRef.nativeElement,'background-color','red')    
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elemtRef.nativeElement,'background-color','red');
    this.backgroundColor =this.highLightColor;
  }
  
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elemtRef.nativeElement,'background-color','transparent');
    this.backgroundColor =this.defaultColor;
  }

  @HostListener('click') click(eventData:Event){
    this.renderer.addClass(this.elemtRef.nativeElement,'some-directive-cls');
  }
}
