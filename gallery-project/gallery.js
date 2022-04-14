let panel1=document.getElementById("panel-1")
let panel2=document.getElementById("panel-2")
let panel3=document.getElementById("panel-3")
let panel4=document.getElementById("panel-4")
let panel5=document.getElementById("panel-5")
function resetactive(){
    panel1.classList.remove('active')
    panel2.classList.remove('active')
    panel3.classList.remove('active')
    panel4.classList.remove('active')
    panel5.classList.remove('active')
   
}
var a="pane"
function selectpanel(panelno){
    if(a==panelno){
        
        document.getElementById(panelno).classList.remove('active')
       a="pane"
    }else{
        a=panelno
        resetactive();
     
document.getElementById(panelno).classList.add('active')

    }

}
