// console.log(eval('2+2'))
var displayArea=document.getElementById("display")
function isoperator(digitOrOperator){
if(digitOrOperator=='+' || digitOrOperator=='-' || digitOrOperator=='*' || digitOrOperator=='/')
    return true
    else
        return false
    
    
}
function clicked(digitOrOperator){
    if(displayArea.innerText==='0' ){  //dont do anything if button clicked is 0 or 00
        if(digitOrOperator!='00'){   
            if(digitOrOperator=='.' || isoperator(digitOrOperator)){  
                //button clicked is . or anything then show it is 0 followed by button clicked (ex:0.5,0+7)
                displayArea.innerText+=digitOrOperator
            }
            else{
                displayArea.innerText=digitOrOperator
            }
            
        }
    }else{
        if(isoperator(displayArea[displayArea.innerText.length-1]) && isoperator(digitOrOperator)){
             //check two operators follows one afer one  (ex:++, **)
            displayArea[displayArea.innerText.length-1]=digitOrOperator
        }
        else{
            displayArea.innerText+=digitOrOperator
        }
       
    }
}

// let y=5
// let x=[]
// for(let i=0;i<y;i++){
// x[i]=Number(prompt())
// if(x[i]>200000){
//   x[i]+=x[i]*0.1
//   x[i]-=x[i]*0.002
// }
// else if (x[i]>100000){
//  x[i]+=x[i]*0.05
//   x[i]-=x[i]*0.0005
// }
// else{
//    x[i]+=x[i]*0.03
// }
// }
// console.log(x);