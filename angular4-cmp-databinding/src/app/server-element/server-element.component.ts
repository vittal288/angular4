import { 
        Component, 
        OnInit, 
        Input,
        ViewEncapsulation,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy,
        ViewChild,
        ElementRef,
        ContentChild,
        SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element:{name:string,content:string,type:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paraGraph:ElementRef;
 
  constructor() {  
    console.log('constructor called ')   
  }
  
  ngOnChanges(changes:SimpleChanges){
    console.log('onChanges called ')
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnIt Called')
    console.log('Header Content',this.header.nativeElement.textContent);
    console.log('Paragrpah Content ', this.paraGraph.nativeElement.textContent);
  }

  //we have to call this method , when angular did not picked the changes or something like that 
  ngDoCheck(){
    console.log('ngDoCheck Called')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called ')
    console.log('Paragrpah Content ', this.paraGraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called ')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called ')
    console.log('Header Content',this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called ')
  }

  ngOnDestroy(){
    console.log('OnDestroy is called ')
  }
}
