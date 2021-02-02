const budgetCalculator = document.getElementById("budgetCalculator");
const budgetValueContainer = document.getElementById("budgetValueContainer");
const incomeValueContainer = document.getElementById("incomeValueContainer");
const expenseValueContainer = document.getElementById("expenseValueContainer");


const amountType = document.getElementById("amountType");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const saveButton = document.getElementById("saveButton");

const totalExpense = document.getElementById("totalExpense");
const totalIncome = document.getElementById("totalIncome");



let expenseCounter =1;
let divIncomeCounter =1;
let divExpenseCounter =1;
let incomeAmount =0;
let expenseAmount=0;
let budgetAmount=0;

saveButton.addEventListener("click", function()
{ 
    let addedDescription = description.value;
    let addedAmount = parseFloat(amount.value);
    if(addedDescription!="" && addedAmount!="")
    {
    let amountTypeValue = amountType.value;
    if(amountTypeValue==1)
    {
        incomeValueContainer.innerHTML +=`<div id="incomeEntry${divIncomeCounter}">
        <span class="incomeDescription">${addedDescription}</span>
        <span>$</span>
        <span id="incomeAmount${divIncomeCounter}">${addedAmount}</span>
        <i class="fa fa-trash fa-lg" onclick="deleteFunction(this.parentNode.id,'incomeAmount${divIncomeCounter}','1')" aria-hidden="true"></i>
        </div>`;
        incomeAmount =parseFloat(addedAmount)+parseFloat(incomeAmount);
        totalIncome.innerText=`+$${incomeAmount}`;
        divIncomeCounter++;
        calculateBudget();

    }
    else if(amountTypeValue==2){
        expenseValueContainer.innerHTML+=`<div id="expenseEntry${divExpenseCounter}">
        <span class="expenseDescription">${addedDescription}</span>
        <span>$</span>
        <span id="expenseAmount${divExpenseCounter}">${addedAmount}</span>
        <i class="fa fa-trash fa-lg" onclick="deleteFunction(this.parentNode.id,'expenseAmount${divExpenseCounter}','2')" aria-hidden="true"></i>
        </div>`;
        expenseAmount =parseFloat(addedAmount)-parseFloat(expenseAmount);
        totalExpense.innerText=`-$${expenseAmount}`;
        divExpenseCounter++;
        calculateBudget();
    }
    description.value="";
    amount.value="";
    }
})

 function deleteFunction(parentContainer,inputAmount,number)
 {
    let  selectedElement=document.getElementById(inputAmount);
    let selectedElementValue =parseFloat(selectedElement.innerText);
    document.getElementById(parentContainer).style.display="none";
    if(number=='1')
    {
       incomeAmount=parseFloat(incomeAmount)-parseFloat(selectedElementValue);
       incomeAmount = incomeAmount.toFixed(2);
       totalIncome.innerText=`+$${incomeAmount}`;
       budgetAmount=parseFloat(budgetAmount)-parseFloat(selectedElementValue);
    }
    else if(number=='2')
    {
        expenseAmount=parseFloat(expenseAmount)-parseFloat(selectedElementValue);
        expenseAmount = expenseAmount.toFixed(2);
        totalExpense.innerText=`-$${expenseAmount}`;
        budgetAmount=parseFloat(budgetAmount)+parseFloat(selectedElementValue);
    }
    budgetValueContainer.innerText=`$${budgetAmount.toFixed(2)}`;
 }
 function calculateBudget()
 {
    budgetAmount = incomeAmount - expenseAmount;
    budgetAmount = budgetAmount.toFixed(2);
    budgetValueContainer.innerText=`$${budgetAmount}`;
 }