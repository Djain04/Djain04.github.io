const name = document.getElementById("name");
const rollno = document.getElementById("rollno");
const batch = document.getElementById("batch");
const gender = document.getElementById("gender");


const insert = document.getElementById("insert");
const update = document.getElementById("update");
const retrieve =  document.getElementById("retrieve");
const remove = document.getElementById("remove");
// Configuration
var firebaseConfig = {
    apiKey: "API-Key",
    authDomain: "Domain",
    projectId: "ProjectName",
    storageBucket: "StorageBucket",
    messagingSenderId: "MessagingID",
    appId: "AppID"
  };
  firebase.initializeApp(firebaseConfig);
let nameValue, rollnoValue, batchValue, genderValue;

// Get Data
function getData()
{
   nameValue = name.value;
   rollnoValue = rollno.value;
   batchValue = batch.value;
   genderValue = gender.value;
}

// Insert Data
insert.addEventListener("click",function(){
    getData();
    firebase.database().ref('student/'+rollnoValue).set({
        Name: nameValue,
        RollNo: rollnoValue,
        Batch:batchValue,
        Gender: genderValue
    });
})

// Update Data

update.addEventListener("click", function(){
    getData();
    firebase.database().ref('student/'+rollnoValue).update({
        Name: nameValue,
        Batch:batchValue,
        Gender: genderValue 
    })
})

// Retrieve Data

retrieve.addEventListener("click",function(){
    getData();
    firebase.database().ref('student/'+rollnoValue).on('value',function(snapshot){
        name.value = snapshot.val().Name;
        batch.value = snapshot.val().Batch;
        gender.value = snapshot.val().Gender;

    })
})

//  Remove Data
remove.addEventListener("click",function(){
    getData();
    firebase.database().ref('student/'+rollnoValue).remove();
})