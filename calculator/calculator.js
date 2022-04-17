// console.log(eval('2+2'))
var displayArea=document.getElementById("display")
function isoperator(digitOrOperator){
if(digitOrOperator=='+' || digitOrOperator=='-' || digitOrOperator=='*' || digitOrOperator=='/' || digitOrOperator==='%')
    return true
    else
        return false
}
// function clicked(digitOrOperator){
//     if(displayArea.innerText.length>=24){
//       return 
//     }
//     if(digitOrOperator!='CLR' && digitOrOperator!='DEL' && digitOrOperator!='='){  //if del and clr pressed not to diplay directly
//     if(displayArea.innerText==='0'  ){  //dont do anything if button clicked is 0 or 00
//         if(digitOrOperator!='00'){   
//             if(digitOrOperator=='.' || isoperator(digitOrOperator)){  
//                 //button clicked is . or anything then show it is 0 followed by button clicked (ex:0.5,0+7)
//                 displayArea.innerText+=digitOrOperator
//             }
//             else{
//                 displayArea.innerText=digitOrOperator
//             }
            
//         }
//     }else{
//         if(isoperator(displayArea.innerText[displayArea.innerText.length-1]) && isoperator(digitOrOperator) || ((displayArea.innerText[displayArea.innerText.length-1])==='.' && digitOrOperator==='.' ) ){
//              //check two operators follows one afer one  (ex:++, **, ..) replace the operator
//             displayArea.innerText= displayArea.innerText.slice(0,-1)+digitOrOperator
//         }
//         else{
//             displayArea.innerText+=digitOrOperator
//         }
       
//     }
//   }
//   else{
//    if(digitOrOperator==='CLR'){
//        displayArea.innerText=0;
//    }
//    else if(digitOrOperator==='DEL'){
//        if(displayArea.innerText.length==1){
//            displayArea.innerText='0'
//        }else{
//         displayArea.innerText= displayArea.innerText.slice(0,-1)
//        }  
//    }
//    else if(digitOrOperator==='='){
//        try {
//         displayArea.innerText=eval(displayArea.innerText)
           
//        } catch (error) { // if any error occur it replaces display to 0
//            displayArea.innerText=0
//        }
//    }
//   }
// }

function clicked(digitOrOperator){
    if(displayArea.innerText.length>=24){
      return 
    }
     
    if(digitOrOperator==='CLR'){
        displayArea.innerText=0;
        return
    }
     if(digitOrOperator==='DEL'){
        if(displayArea.innerText.length==1){
            displayArea.innerText='0'
        }else{
         displayArea.innerText= displayArea.innerText.slice(0,-1)
        }
        return  
    }
     if(digitOrOperator==='='){
        try {
         displayArea.innerText=eval(displayArea.innerText)
            
        } catch (error) { // if any error occur it replaces display to 0
            displayArea.innerText=0
        }
    }

    if(digitOrOperator!='CLR' && digitOrOperator!='DEL' && digitOrOperator!='='){  //if del and clr pressed not to diplay directly
    if(displayArea.innerText==='0'  ){  //dont do anything if button clicked is 0 or 00
        if(digitOrOperator==='00' && digitOrOperator==='0')
            return 
    if(digitOrOperator=='.' || isoperator(digitOrOperator)){  
                //button clicked is . or anything then show it is 0 followed by button clicked (ex:0.5,0+7)
            displayArea.innerText='0'+ digitOrOperator
            return
            }
     else{
                displayArea.innerText=digitOrOperator
        }
            
        
    }else{
        if(isoperator(displayArea.innerText[displayArea.innerText.length-1]) && isoperator(digitOrOperator) || ((displayArea.innerText[displayArea.innerText.length-1])==='.' && digitOrOperator==='.' ) ){
             //check two operators follows one afer one  (ex:++, **, ..) replace the operator
            displayArea.innerText= displayArea.innerText.slice(0,-1)+digitOrOperator
            return
        }
        else{
            displayArea.innerText+=digitOrOperator
        }
       
    }
  }
  
}

