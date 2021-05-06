describe('The bill with settings factory function', function(){
    describe('Set Values', function(){
        it('should be able to set the call cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.50);
        assert.equal(1.50, settingsBill.getCallCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(2.50);
        assert.equal(2.50, settingsBill2.getCallCost());
        });
        it('should be able to set the sms cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.50);
        assert.equal(0.50, settingsBill.getSmsCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setSmsCost(1.00);
        assert.equal(1.00, settingsBill2.getSmsCost());
        });
        it('should be able to set the call & sms cost', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(3.00);
        settingsBill.setSmsCost(1.50);
        
        assert.equal(3.00, settingsBill.getCallCost());
        assert.equal(1.50, settingsBill.getSmsCost())
        });
        it('should be able to set the warning level', function(){
        let settingsBill = billWithSettings();
        settingsBill.setWarningLevel(5);
        assert.equal(5, settingsBill.getWarningLevel());

        let settingsBill2 = billWithSettings();
        settingsBill2.setWarningLevel(10);
        assert.equal(10, settingsBill2.getWarningLevel());
        });
        it('should be able to set the critical level', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLevel(15);
        assert.equal(15, settingsBill.getCriticalLevel());

        let settingsBill2 = billWithSettings();
        settingsBill2.setCriticalLevel(25);
        assert.equal(25, settingsBill2.getCriticalLevel());
        });
        it('should be able to set the warning & critical level', function(){
        let settingsBill = billWithSettings();
        
        settingsBill.setWarningLevel(25);
        settingsBill.setCriticalLevel(30);
      
        assert.equal(25, settingsBill.getWarningLevel());
        assert.equal(30, settingsBill.getCriticalLevel());

        
        });
    });
    
    describe('Use Values', function(){
        it('should be able to use call cost set', function(){
            let settingsBill = billWithSettings();
            
            settingsBill.setCallCost(3.82);
            settingsBill.setSmsCost(1.52);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(11.46, settingsBill.getTotalCost());
            assert.equal(11.46, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

    });
    
    
});
