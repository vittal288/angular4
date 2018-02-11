import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('sould emit the event when upvoted', () => {
    //AAA: Arrange ,Act and Assert
    let totalVoters = null;
    //Arrange
    component.voteChanged.subscribe((tv)=>{
      totalVoters =tv;
    });

    //Act
    component.upVote();

    //Assert
    //expect(totalVoters).not.toBeNull();
    expect(totalVoters).toBe(1);
  });
});