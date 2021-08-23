function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    input.value = '';
    return inputValue;
}
function getCurrentValue(inputId) {
    const currentValue = document.getElementById(inputId);
    const currentValueText = currentValue.innerText;
    const currentValueNumber = parseFloat(currentValueText);
}
document.getElementById('deposit_btn').addEventListener('click', function () {
    getInputValue('deposit_input');
});