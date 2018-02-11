import{getCurrencies} from './getCurrencies';

describe('Currency',()=>{


    it('should return the currencies',()=>{
        expect(getCurrencies()).toContain('USD');
        expect(getCurrencies()).toContain('AUD');
        expect(getCurrencies()).toContain('EUR');
    })
})