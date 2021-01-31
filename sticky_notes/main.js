const addNoteButton = document.getElementById("addNoteButton");
const noteContainer = document.getElementById("noteContainer");
const noteArea = document.getElementById("noteArea");
const note = document.getElementById("note");
const save =document.getElementById("save");
const close = document.getElementById("close");
const noteSection = document.getElementById("noteSection");

addNoteButton.addEventListener("click",function(){
    noteArea.style.display="block";
})
let noteCount =1;
save.addEventListener("click",function(){
    if(note.value!="")
    {
        noteContainer.innerHTML+=`
        <div id="added_note${noteCount}" >
        <i id="edit_button" class="fa fa-pencil fa-lg" aria-hidden="true" onclick="edit_note(this.parentNode.id)"></i>
        <i id="delete_button" class="fa fa-trash fa-lg" aria-hidden="true" onclick="delete_note(this.parentNode.id)"></i>
        <br>
        <br>
        <div id="content_added_note${noteCount}">${note.value}</div>
       </div>`;
       let currentNote = document.getElementById(`added_note${noteCount}`);
       currentNote.style.margin=getMargin();
       currentNote.style.backgroundColor=getColor();
       currentNote.style.transform=getRotation();

        note.value="";
        noteCount++;
        noteArea.style.display="none";
    
    }
    else if(note.value==""){
        noteArea.style.display="none";   
    } 

})
close.addEventListener("click",function(){
    note.value="";
    noteArea.style.display="none";
})

function delete_note(id){
  document.getElementById(id).style.display="none";
}

function edit_note(id){
  const content = document.getElementById(`content_${id}`).innerText;
  const previousAddedNote = document.getElementById(id);
  previousAddedNote.style.display="none";
  noteArea.style.display="block";  
  note.value= content;
}

function getColor()
{
    const pick_color =["hotpink","turquoise","springgreen","yellow"];
    return pick_color[getRandomNumber(0,pick_color.length-1)];   
}
function getMargin()
{
    const pick_margin=["-5px","1px","5px","10px","15px","20px"];
    return pick_margin[getRandomNumber(0,pick_margin.length-1)];
}
function getRandomNumber(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);
}

function getRotation()
{
    const pick_rotation = ["rotate(-3deg)","rotate(-1deg)","rotate(1deg)","rotate(3deg)","rotate(-5deg)","rotate(-10deg)"];
    return pick_rotation[getRandomNumber(0,pick_rotation.length-1)];
}