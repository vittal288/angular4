// import { HighLightDirective } from './highlight-directive/highlight-directive';
import { Directive } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';


// to test the directive, so we created the component here
@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})

class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, HighlightDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the background color with cyan', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[0];

    expect(de.nativeElement.style.backgroundColor).toBe('cyan');

  });

  it('should highlight the backgorundcolor to be default value', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[1];
    const directive = de.injector.get(HighlightDirective);
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  })


});
