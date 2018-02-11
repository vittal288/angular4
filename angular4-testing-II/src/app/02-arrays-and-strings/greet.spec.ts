import {greet} from './greet';

describe('GREET',()=>{
    it('it should include the name in the message',()=>{
        const result = greet('Vittal');
        expect(result).toContain('Vittal');
    });

    // it('it should return NAN',()=>{
    //     const result = greet(123);
    //     expect(result).toBe(NaN);
    // })
})