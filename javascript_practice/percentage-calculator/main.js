const exam1=document.getElementById('exam1');
const exam2=document.getElementById('exam2');
const exam3=document.getElementById('exam3');
const div=document.getElementById('percentage');

function calculate(){
    const exam1Value=parseInt(exam1.value);
    const exam2Value=parseInt(exam2.value);
    const exam3Value=parseInt(exam3.value);
    const percentage=((exam1Value+exam2Value+exam3Value)/300)*100;

    div.innerText=`You have got a ${percentage.toPrecision(4)}%`;
}

const reset=document.getElementById('reset');

reset.addEventListener("click",()=>{
exam1.value="";
exam2.value="";
exam3.value="";
div.innerText="";
})