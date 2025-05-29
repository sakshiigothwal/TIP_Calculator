const btn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalInput = document.getElementById("total");

function calTotal(){
    const billAmount = billInput.value;
    const tipPercent = tipInput.value;
    const totalAmount = Math.round(billAmount * (1 + tipPercent / 100));
   totalInput.innerText = totalAmount;
}
btn.addEventListener("click", calTotal);