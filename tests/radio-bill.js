describe('The radio bill factory function', function(){
    it('should be able to return the bill for 1 call set at 2.75 when call option is selected', function(){

        let radioBill = radioBills();

        radioBill.setRadioCallAmount();

        radioBill.phoneCall();

        assert.equal(2.75, radioBill.getRadioBillString('call'));

    });
    it('should be able to return the bill for 2 calls set at 2.75 each when call option is selected', function(){

        let radioBill = radioBills();

        radioBill.setRadioCallAmount();

        radioBill.phoneCall();
        radioBill.phoneCall();

        assert.equal(5.50, radioBill.getRadioBillString('call'));

    });
    it('should be able to return the bill for 1 sms set at 0.75 each when sms option is selected', function(){
        let radioBill = radioBills();

        radioBill.setRadioSmsAmount();

        radioBill.sendMessage();
       
        assert.equal(0.75, radioBill.getRadioBillString('sms'));

    });
    it('should be able to return the bill for 2 sms set at 0.75 each when sms option is selected', function(){
        let radioBill = radioBills();

        radioBill.setRadioSmsAmount();

        radioBill.sendMessage();
        radioBill.sendMessage();
       
        assert.equal(1.50, radioBill.getRadioBillString('sms'));

    });
    
    it('should be able to return the total bill for "sms"  & "call" for a call set at 2.75 and sms set at 0.75 when both options are selected', function(){
        let radioBill = radioBills();

        radioBill.setRadioSmsAmount();
        radioBill.setRadioCallAmount();

        radioBill.sendMessage();
        radioBill.phoneCall();
        radioBill.phoneCall();
        radioBill.phoneCall();
       
        assert.equal(0.75, radioBill.getRadioBillString('sms'));
        assert.equal(8.25, radioBill.getRadioBillString('call'));
        assert.equal(9.00, radioBill.getRadioTotalAmount());

    });
    describe('Warning & Critical Level', function(){
        it('should be able to return "warning" when warning level is reached', function(){
            let radioBill = radioBills();

            radioBill.setRadioSmsAmount();
            radioBill.setRadioCallAmount();
            
            radioBill.sendMessage();
            radioBill.sendMessage();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();

        
            assert.equal(1.50, radioBill.getRadioBillString('sms'));
            assert.equal(33.00, radioBill.getRadioBillString('call'));
            assert.equal(34.50, radioBill.getRadioTotalAmount());
            assert.equal('warning', radioBill.getRadioClassName());
            
            
        });
        it('should be able to return "danger" when critical level is reached', function(){
            let radioBill = radioBills();

            radioBill.setRadioSmsAmount();
            radioBill.setRadioCallAmount();

            radioBill.sendMessage();
            radioBill.sendMessage(); 
            radioBill.sendMessage();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall(); 
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            radioBill.phoneCall();
            
           
        
            assert.equal(2.25, radioBill.getRadioBillString('sms'));
            assert.equal(66.00, radioBill.getRadioBillString('call'));
            assert.equal(68.25, radioBill.getRadioTotalAmount());
            assert.equal('danger', radioBill.getRadioClassName());
            
            
        }); 

    });

});