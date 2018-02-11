import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

    // fixture.nativeElement
    // fixture.debugElement

    // fixture.detectChanges()
  });

  it('should render total vote', () => {
    component.othersVote = 20;
    component.myVote = 1;

    // after changing the properties of the component we have explicitly update the DOM
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toBe('21');
  });

  it('should highlight the button if user upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    // const el: HTMLElement = de.nativeElement;
    // expect(el.className).toBe('glyphicon glyphicon-menu-up vote-button highlighted');

    // ORRRR
    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increase the total votes by 1 if user clicks on the Up Vote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);

  })
});

