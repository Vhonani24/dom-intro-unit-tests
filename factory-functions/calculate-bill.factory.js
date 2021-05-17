function billCalculations(){
  var total = 0;

  function getBillString(str){
    var _str = str.split(',');//convert string into an array
    
   
    
    for(var i=0;i < _str.length;i++){//loop thru the array
     
      if(_str[i].includes('call')) {//check condition for calls
        total += 2.75;//push in all reg from town into result
      }
      if(_str[i].includes('sms')){
        total += 0.75;//check condition for messages
      }
    }
     return total.toFixed(2);//return total
  }

  function setClasses(){
    if(total >= 20 && total < 30){
      return 'warning';
    }
    if(total >= 30){
      return 'danger';
    }
  }

  return {
    
    getBillString,
    setClasses
  }
  

  
  
  
  
  
  
    
  
}
