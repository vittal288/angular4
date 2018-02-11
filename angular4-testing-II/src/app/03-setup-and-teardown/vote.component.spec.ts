import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  
  let component:VoteComponent;
  
  beforeEach(()=>{
    component = new VoteComponent();
  })

  it('should increment its value',()=>{    
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should return negetive value',()=>{    
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  })

});