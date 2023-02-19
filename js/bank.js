// Deposit all operatioons
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
// select deposite element and select there inner text
    const depositElement = document.getElementById('deposit');
    const depositAmount = parseInt(depositElement.innerText);

    
// select deposite input field and select there value
    const depositInput = document.getElementById('deposit-input');
    const newDeposit = parseInt(depositInput.value);

// if input field amount is greater than 0
    if(newDeposit > 0){
// totalDeposit = deposit element amount + new deposit amount
        const totalDeposit = depositAmount + newDeposit;
// Deposit element inner text = total deposit
        depositElement.innerText = totalDeposit;
// Calling Total Balance cheking function, who calculate total balance
        addTotalBalance(newDeposit);
// Deposit input field will empty after click deposit button
        depositInput.value = '';
    }
// error message
    else{
        alert("hello");
    }
})


// This function calculate the total balance after deposit
function addTotalBalance(depositAmount){
    const totalBalanceElement = document.getElementById('balance');
    const totalBalance = parseInt(totalBalanceElement.innerText);
    const depositNewBalance = totalBalance + depositAmount;
    totalBalanceElement.innerHTML = depositNewBalance;
}


// Withdraw all operations
// Withdraw button selected
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
// Withdraw element selected
    const withdrawElement = document.getElementById('withdraw');
// Withdraw element inner text
    const withdrawAmount = parseInt(withdrawElement.innerText);

// Withdraw input field selected
    const withdrawInput = document.getElementById('withdraw-input');
// Withdraw input field value store in newWithdraw variable
    const newWithdraw = parseInt(withdrawInput.value);

// Balance Element Selected
    const totalBalanceElement = document.getElementById('balance');
// Balance Element inner text or amount in totalBalance variable
    const totalBalance = parseInt(totalBalanceElement.innerText);

// if total balance greater than withdraw input field amount and
// input field amount greater than 0 or input field amount equal totalbalance
// Then this condition will executable
    if(totalBalance > newWithdraw && newWithdraw > 0 || newWithdraw === totalBalance){
// Withdraw element amount and new withdraw input field amount store in a variable
        const totalWithdraw = withdrawAmount + newWithdraw;
// total withdraw elemenet amount set
        withdrawElement.innerText = totalWithdraw;

// Withdraw input field will empty after click withdraw button
        withdrawInput.value = '';
// minusTotalBalance function calling
        minusTotalBalance(newWithdraw, totalBalance);
    }

// Error Message
    else{
        alert("You Don't have enough money!")
        withdrawInput.value = '';
    }
})


// This function calculate total balance after withdrawl amount
function minusTotalBalance(newWithdraw){
    const totalBalanceElement = document.getElementById('balance');
    const totalBalanceValue = parseInt(totalBalanceElement.innerText);

    const withdrawNewBalance = totalBalanceValue - newWithdraw;
    totalBalanceElement.innerHTML = withdrawNewBalance;
}