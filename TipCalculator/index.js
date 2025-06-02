const btn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalInput = document.getElementById("total");
const errorMsg = document.getElementById("error");
const clearAll = document.getElementById("clear");

function calTotal(){
    const billAmount = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    errorMsg.innerText= "";
    totalInput.innerText= "";

    if (isNaN(billAmount) || isNaN(tipPercent)) {
        errorMsg.innerText = "Please enter valid amount or percentage.";
        return;
    }

    if (billAmount < 0 || tipPercent < 0) {
        errorMsg.innerText = "Negative values are not allowed.";
        return;
    }

    const totalAmount = Math.round(billAmount * (1 + tipPercent / 100));
    totalInput.innerText = totalAmount;

}

function clearFields() {
    billInput.value = "";
    tipInput.value = "";
    totalInput.innerText = "Total:";
    errorMsg.innerText = "";
}

btn.addEventListener("click", calTotal);
clearAll.addEventListener("click", clearFields);
