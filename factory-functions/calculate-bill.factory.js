function billCalculations(){

  var theCallBill = 2.75;
  var theSmsBill = 0.75;
  var callBill = [];
  var smsBill = [];
  var totalBill = 0;
  

  function getBillString(str){
    var _str = str.split(',');//convert string into an array
    
    for(var i=0;i < _str.length;i++){//loop thru the array
      var total = _str[i].trim();//remove spaces at index i
      if(total.includes('call')) {//check condition for calls
        callBill.push(total);//push in all reg from town into result
      }
      if(total.includes('sms')){
        smsBill.push(total);//check condition for messages
      }
    }
     totalBill = (callBill.length * theCallBill) + (smsBill.length * theSmsBill);//calculate total amount
     return totalBill.toFixed(2);//return total
  }

  function setClasses(){
    if(totalBill >= 20 && totalBill < 30){
      return 'warning';
    }
    if(totalBill >= 30){
      return 'danger';
    }
  }

  return {
    
    getBillString,
    setClasses
  }
  

  
  
  
  
  
  
    
  
}
