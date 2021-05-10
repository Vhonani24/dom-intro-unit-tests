function calculateBill(str){
    var _str = str.split(',');//convert string into an array
    var calls = [];//create an empty variabe to add all calls and sms
    var messages = []//create an empty variabe to add all messages
    //var currency  = 'R';
    for(var i=0;i < _str.length;i++){//loop thru the array
      var total = _str[i].trim();//remove spaces at index i
      if(total.includes('call')) {//check condition for calls
        calls.push(total);//push in all reg from town into result
      }
      if(total.includes('sms')){
        messages.push(total);//check condition for messages
      }
    }
    var totalAmount = (calls.length * 2.75) + (messages.length * 0.65);//calculate total amount
    return totalAmount.toFixed(2);//return total
    
  
}
