export class CountService{
   
    activeToInActiveCnt:number=0;
    InActiveToActiveCnt:number=0;

    public countActiveUserTX(){
        this.activeToInActiveCnt++;
        console.log('Active USer', this.activeToInActiveCnt);
    }

    public countInActiveUserTX(){
       this.InActiveToActiveCnt++;
       console.log('InActive User', this.InActiveToActiveCnt);
    }
}