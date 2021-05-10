describe('The calculate bill factory function', function(){
    it('Calculates the total bill for 1 call made', function(){
       
        assert.equal(2.75, calculateBill('call'));
    });
    it('Calculates the total bill for 1 sms made', function(){
       
        assert.equal(0.65, calculateBill('sms'));
    });
    it('Calculates the total bill for 1 sms & 2 calls made', function(){
       
        assert.equal(6.15, calculateBill('sms,call,call'));
    });
    it('should return "warning" after warning level has been reached', function(){
       
        assert.equal('warning', calculateBill('call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms'));
    });
});