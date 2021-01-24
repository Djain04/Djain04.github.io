const toDoTextBox=document.getElementById("toDoTextBox");
const toDoButton=document.getElementById("toDoButton");
const toDoContent = document.getElementById("toDoContent");
const toDoSection= document.getElementById("toDoSection");

let counter=1;

toDoButton.addEventListener("click",function(){
    if(toDoTextBox.value!="")
    {
    const task =toDoTextBox.value;
    toDoContent.innerHTML+=`<div id="toDoItem${counter}">
     <label id="content${counter}">${task}</label>
     <button id="checkButton${counter}" class="unstriked" onclick="check(${counter})"><i class="fa fa-check" aria-hidden="true"></i></button>
     <button id="removeButton${counter}" onclick="remove(${counter})"><i class="fa fa-times" aria-hidden="true"></i></button>  
     </div>`;
    toDoTextBox.value="";
    counter++;
    }
})
function check(count)
{
const checkButton = document.getElementById(`checkButton${count}`);
const content =document.getElementById(`content${count}`);
const contentValue=(content.innerText || content.textContent);
if(checkButton.classList.contains('unstriked')==true)
{
     content.innerHTML=`<strike>${contentValue}</strike>`;
     checkButton.classList.remove('unstriked');
    }
else{
    content.innerHTML=`${contentValue}`;
    checkButton.classList.add('unstriked');
}
}

function remove(count){
    const toDoItem =document.getElementById(`toDoItem${count}`);
    toDoItem.style.display="none";
}

