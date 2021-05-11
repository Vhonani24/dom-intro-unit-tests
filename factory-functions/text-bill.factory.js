function billText(){
    var theCallAmount = 0;
    var theSmsAmount = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var totalCallAmount = 0;
    var totalSmsAmount = 0;
    var totalAmount = 0;
    
    function setCallAmount() {
        theCallAmount = 2.75;
    }
    function setSmsAmount() {
        theSmsAmount = 0.75;
    }

    function getCallAmount() {
        return theCallAmount;
    }
    function getSmsAmount() {
        return theSmsAmount;
    }
    function ringCall() {
        totalCallAmount += theCallAmount;
    }
    
    function sendText() {
        totalSmsAmount += theSmsAmount;

    }
    function getTotalCallAmount() {
        return totalCallAmount;

    }
    function getTotalSmsAmount() {
        return totalSmsAmount;

    }
    function getTotalAmount() {
        return totalCallAmount + totalSmsAmount;
    }

    function getTextBillString(str){
        if(str === "call"){
            return getTotalCallAmount();
        }
        if(str === "sms"){
            return getTotalSmsAmount();
        }
    }

    function getTextClassName(){
        if(getTotalAmount() >= 30 && getTotalAmount() <= 50){
          return 'warning';
        }
        if(getTotalAmount() >= 30){
          return 'danger';
        }
    }
    


    
    
    
    
    return{

    
        setCallAmount,
        setSmsAmount,
        getCallAmount,
        getSmsAmount,
        ringCall,
        sendText,
        getTotalCallAmount,
        getTotalSmsAmount,
        getTotalAmount,
        getTextBillString,
        getTextClassName
        


    }
}