//for login Button
const btn =document.getElementById("login");
btn.addEventListener("click",()=>{
    const submitarea =document.getElementById("form");
    submitarea.style.display="none";
    const transitionarea=document.getElementById("transition-area");
    transitionarea.style.display = "block";
});
//for deposite
const depositebtn=document.getElementById("depositebtn");
depositebtn.addEventListener("click",()=>{

    const depositeAmount=document.getElementById("depositeAmount").value;
    const depositnum=parseFloat(depositeAmount);
    // console.log(depositnum); /* input field deposite er*/
   
     const currDeposite=document.getElementById("currDeposite").innerText;
     const currDepositenum=parseFloat(currDeposite);
    // console.log(currDepositenum);/*  //deposite er ghore man 00 ;*/
    
     const totaldeposite=currDepositenum+depositnum;
     //console.log(totaldeposite);/* 0+5=5; */

     document.getElementById("currDeposite").innerText=totaldeposite;

     const currBalance=document.getElementById("currBalance").innerText;
     const currBalancenum=parseFloat(currBalance);
     const totalbalance = currBalancenum + depositnum;
     document.getElementById("currBalance").innerText=totalbalance;

     document.getElementById("depositeAmount").value="";     

});

//withdraw er kaj;
const withdrawbtn =document.getElementById("withdrawbtn");
withdrawbtn.addEventListener("click",()=>{

const withdrawAmount=document.getElementById("withdrawAmount").value; /*input field */
const withdrawAmountnum=parseFloat(withdrawAmount);
// console.log(withdrawAmountnum);
const currwithdraw=document.getElementById("currwithdraw").innerText; /*withdraw box */
const currwithdrawnum=parseFloat(currwithdraw);

const totalwithdraw = currwithdrawnum + withdrawAmountnum;
document.getElementById("currwithdraw").innerText=totalwithdraw;

//balance theke subtract korar kaj akhon:
const currBalance=document.getElementById("currBalance").innerText;
     const currBalancenum=parseFloat(currBalance);
     const totalbalance = currBalancenum - withdrawAmountnum;
     document.getElementById("currBalance").innerText=totalbalance;


document.getElementById("withdrawAmount").value="";

});