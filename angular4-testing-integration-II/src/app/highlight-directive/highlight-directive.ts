import { Directive, ElementRef, OnInit, Input } from '@angular/core';



@Directive({
    selector: '[appHighLight]'
})


export class HighLightDirective implements OnInit {
    public defulatColor = 'red';

    @Input('appHighLight') appHighLight: string;
    
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = this.appHighLight || this.defulatColor;
    }

}

