import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    .compileComponents();

    // compileComponents means : there are two files got imported inside the component , one is HTML and another is template files 
    // so the reading of files is little slow compare to other operations. So reading file operations are executed in async function 
    // "compileComponents" helps  us to wait till those two files get compiled
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
