
import {compute} from './compute'


describe('compute',()=>{
    it('should return 0 if input is negative',()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should retur incremented value for postive number',()=>{
        const result = compute(1);
        expect(result).toBe(2);
    })
})