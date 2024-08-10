
let counter =0;
const counter_btn=document.getElementById("btn");

counter_btn.addEventListener("click",()=>{
counter++;
counter_btn.innerHTML=`Counter ${counter}`;
})