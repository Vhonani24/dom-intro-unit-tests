describe('The calculate bill factory function', function(){

    it('should be able to take the string "call" and return the bill for 1 call made set at 2.75', function(){

        let calculateBill = billCalculations();

       
        assert.equal(2.75, calculateBill.getBillString('call'));
    });

    it('should be able to take the string "sms" and return the bill for 1 sms made set at 0.75', function(){

        let calculateBill = billCalculations();

       
        assert.equal(0.75, calculateBill.getBillString('sms'));
    });
    
    it('should be able to take in a string with calls & sms and calculate the total bill', function(){

        let calculateBill = billCalculations();

       
        assert.equal(6.25, calculateBill.getBillString('call,call,sms'));
    }); 
    describe('warning & critical level', function(){
        it('should be able to return "warning" when warning level is reached', function(){
            let calculateBill = billCalculations();
            
            assert.equal(23.25, calculateBill.getBillString('call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms'));
            assert.equal('warning', calculateBill.setClasses());
        }); 
        it('should be able to return "danger" when critical level is reached', function(){
            let calculateBill = billCalculations();
            
            assert.equal(31.00, calculateBill.getBillString('call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms'));
            assert.equal('danger', calculateBill.setClasses());
        }); 


    });
   
});