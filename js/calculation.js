function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    input.value = '';
    return inputValue;
}
function getCurrentValue(textId) {
    const currentValue = document.getElementById(textId);
    const currentValueText = currentValue.innerText;
    const currentValueNumber = parseFloat(currentValueText);
    return currentValueNumber;
}
function updateTotalField(textId, inputId) {
    const previousAmount = getCurrentValue(textId);
    const newAmount = getInputValue(inputId);
    const totalAmount = previousAmount + newAmount;
    document.getElementById(textId).innerText = totalAmount;
    return totalAmount;
}
function updateBalanceField() {
    const previousAmount = getCurrentValue('balance_total');
    const previousAmountText = previousAmount.innerText;
    const previousAmountNumber = parseFloat(previousAmountText);

}
document.getElementById('deposit_btn').addEventListener('click', function () {
    updateTotalField('deposit_total', 'deposit_input');
    updateTotalField('balance_total', 'deposit_input');
});
document.getElementById('withdraw_btn').addEventListener('click', function () {

});