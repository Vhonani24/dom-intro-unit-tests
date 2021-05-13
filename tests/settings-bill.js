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
        
            
            settingsBill.setCallCost(1.33);
            settingsBill.setSmsCost(0.52);

            settingsBill.makeCall();
            settingsBill.makeCall();
            
            
            assert.equal(2.66, settingsBill.getTotalCost());
            assert.equal(2.66, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });
        it('should be able to use call cost set for 2 calls at 2.32 each', function(){
            let settingsBill = billWithSettings();
         
            
            settingsBill.setCallCost(2.32);
            settingsBill.setSmsCost(1.52);

            settingsBill.makeCall();
            settingsBill.makeCall();
            
            assert.equal(4.64, settingsBill.getTotalCost());
            assert.equal(4.64, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
        });
        it('should be able to use sms cost set for 2 sms at 0.32 each', function(){
            let settingsBill = billWithSettings();
           


            settingsBill.setCallCost(1.32);
            settingsBill.setSmsCost(0.32);

            settingsBill.sendSms();
            settingsBill.sendSms();
            
            assert.equal(0.64, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(0.64, settingsBill.getTotalSmsCost());
        });
        it('should be able to use sms cost set for 3 sms at 0.75 each & call cost set for 3 calls at 2.75 each', function(){
            let settingsBill = billWithSettings();
        
        

            
            settingsBill.setCallCost(2.75);
            settingsBill.setSmsCost(0.75);

            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            
            assert.equal(10.50, settingsBill.getTotalCost());
            assert.equal(8.25, settingsBill.getTotalCallCost());
            assert.equal(2.25, settingsBill.getTotalSmsCost());
        });
    });
    describe('Warning & Critical Level', function(){
        it('should return a class name of "warning" if warning level is reached', function(){
            let settingsBill = billWithSettings();
            
           
            settingsBill.setWarningLevel(5);
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.80);
        
        
            

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal('warning', settingsBill.getClassName());
            
        });
        
        it('should return a class name of "danger" if critical level is reached', function(){
            let settingsBill = billWithSettings();
            settingsBill.setWarningLevel(5);
            //settingsBill.setCriticalLevel(10);
              
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.30);
               
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();


            assert.equal('danger', settingsBill.getClassName());
             //alert(settingsBill.getClassName());
            
        });
        
        it('should stop the the total call cost from increasing when the critical level has been reached', function(){
            let settingsBill = billWithSettings();
            
           
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalLevel(10);
            settingsBill.setWarningLevel(5);
           
            
            
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();             
            
            assert.equal('danger', settingsBill.getClassName());
            assert.equal(10, settingsBill.stopCostCount());
        });
        
        
    });
    
    
});
