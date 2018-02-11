import {ReversePipe} from './reverse.pipe';

//isolated test: does not depend any angular UNIT TEST settings
describe("Reverse Pipe ",()=>{
    
    it("should reverse a string",()=>{
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    })
})