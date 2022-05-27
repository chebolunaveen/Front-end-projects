
 const statusBlock=document.getElementsByClassName('status')
 const OrderIdInfo=document.getElementById('order-Id-Info')
 const addDone=(index)=>{
     statusBlock[index].classList.add('done');
 }

// <!--  callback hell   coding with nested callbacks-->

    const executeOrder=(callback)=>{
        const OrderId=document.getElementById('order-id').value
        OrderIdInfo.innerText='Status for OrderId :' + OrderId ;
        // const orderNo=document.getElementById('order-id').value;
        let x=0;
        addDone(x++)
        //console.log(orderNo +':Order Placed')
        setTimeout(()=>{
            addDone(x++)
            //console.log( orderNo + ': chef received the order and Start Preparing')
         setTimeout(()=>{
            addDone(x++)
            //console.log(orderNo +':pizza sauce Added');
             setTimeout(()=>{
                addDone(x++)
                //console.log(orderNo +':First layer of cheese Added');
                setTimeout(()=>{
                    addDone(x++)
                //    console.log(orderNo +':Toppings Added');
                setTimeout(()=>{
                    addDone(x++)
                    //console.log(orderNo +':Second layer of pizza Added');
                    setTimeout(()=>{
                        addDone(x++)
                        //console.log(orderNo +':pizza Baked');
                        setTimeout(()=>{
                            addDone(x++)
                            //console.log(orderNo +':Order packed');  
                            setTimeout(()=>{
                                addDone(x++)
                                //console.log(orderNo +':package received at counter');
                              
                               setTimeout(()=>{
                                addDone(x++)
                                   //console.log('Order handed to Zomopto guy!')
                                   callback();
                               },2000)
                            },2000)
                        },8000)
                    },15000)
                },5000)
                },12000)
             },5000)
         },10000)
        },2000)

        //callback();
    }
   
