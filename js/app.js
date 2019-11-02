// ----------verible----------
const msg = document.querySelector('.msg');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clearField = document.getElementById('clearField');

// -----First Events--------
send.addEventListener('click', deliverTxt)

function deliverTxt(){
let textValue = text.value;
msg.innerHTML = textValue;
}

// -----Second Events--------
clearField.addEventListener('click', emptyField)
function emptyField(){
msg.innerHTML = '';
text.value = '';
}
