describe('The text bill factory function', function(){
    it('should be able to take the string "call" & return the bill for 1 call set at 2.75', function(){

        let textBill = billText();

        textBill.setCallAmount();

        textBill.ringCall();

        assert.equal(2.75, textBill.getTextBillString('call'));

    });
    it('should be able to take the string "call" & return the bill for 2 calls set at 2.75 each', function(){

        let textBill = billText();

        textBill.setCallAmount();

        textBill.ringCall();
        textBill.ringCall();

        assert.equal(5.50, textBill.getTextBillString('call'));

    });
    it('should be able to take the string "sms" & return the bill for 1 sms set at 0.75', function(){
        let textBill = billText();

        textBill.setSmsAmount();

        textBill.sendText();
       
        assert.equal(0.75, textBill.getTextBillString('sms'));

    });
    it('should be able to take the string "sms" & return the bill for 2 sms set at 0.75 each', function(){
        let textBill = billText();

        textBill.setSmsAmount();

        textBill.sendText();
        textBill.sendText();
       
        assert.equal(1.50, textBill.getTextBillString('sms'));

    });
    
    it('should be able to take the string "sms"  & "call" and return the total bill for a call set at 2.75 and sms set at 0.75', function(){
        let textBill = billText();

        textBill.setSmsAmount();
        textBill.setCallAmount();

        textBill.sendText();
        textBill.ringCall();
        textBill.ringCall();
        textBill.ringCall();
       
        assert.equal(0.75, textBill.getTextBillString('sms'));
        assert.equal(8.25, textBill.getTextBillString('call'));
        assert.equal(9.00, textBill.getTotalAmount());

    });
    describe('Warning & Critical Level', function(){
        it('should be able to return "warning" when warning level is reached', function(){
            let textBill = billText();

            textBill.setSmsAmount();
            textBill.setCallAmount();
            
            textBill.sendText();
            textBill.sendText();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();

        
            assert.equal(1.50, textBill.getTextBillString('sms'));
            assert.equal(33.00, textBill.getTextBillString('call'));
            assert.equal(34.50, textBill.getTotalAmount());
            assert.equal('warning', textBill.getTextClassName());
            
            
        });
        it('should be able to return "danger" when critical level is reached', function(){
            let textBill = billText();

            textBill.setSmsAmount();
            textBill.setCallAmount();
            
            textBill.sendText();
            textBill.sendText();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();
            textBill.ringCall();    
            
        
            assert.equal(1.50, textBill.getTextBillString('sms'));
            assert.equal(57.75, textBill.getTextBillString('call'));
            assert.equal(59.25, textBill.getTotalAmount());
            assert.equal('danger', textBill.getTextClassName());
            
            
        }); 

    });

});
   