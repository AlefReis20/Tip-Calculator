import IMask from 'imask';

const customValue = document.querySelector('#custom');
const customValuePattern = {
  mask: '000',
};
IMask(customValue, customValuePattern);

const allInputs = document.querySelectorAll('input');
const inputBill = document.querySelector('#bill');
const inputPeople = document.querySelector('#person');
const buttonValueTip = document.querySelectorAll('.container button');
const buttonReset = document.querySelector('#reset');
const tipValue = document.querySelector('.tip-amount h2');
const personTotal = document.querySelector('.total h2');
const grandTotal = document.querySelector('.grand-total h2');

const calculateTip = () => {
  let bill = +inputBill.value;
  let people = +inputPeople.value;
  let custom = +customValue.value / 100;

  window.percentOfTip = (n) => {
    if (bill === 0 || people === 0) {
      alert('Bill value or number of people not filled in.');
    } else {
      let x = buttonValueTip;
      for (let i = 0; i < x.length; i++) {}

      const tipAmount = +((bill * n) / people);
      const totalAmountPerPerson = tipAmount + bill / people;
      const grandTotalValue = totalAmountPerPerson * people;

      tipValue.innerText = '$' + tipAmount.toFixed(2);
      personTotal.innerText = '$' + totalAmountPerPerson.toFixed(2);
      grandTotal.innerText = '$' + grandTotalValue.toFixed(2);
    }
    return true;
  };
  if (bill !== 0 && people !== 0 && custom !== 0) {
    const tipAmount = +((bill * custom) / people);
    const totalAmountPerPerson = tipAmount + bill / people;
    const grandTotalValue = totalAmountPerPerson * people;

    tipValue.innerText = '$' + tipAmount.toFixed(2);
    personTotal.innerText = '$' + totalAmountPerPerson.toFixed(2);
    grandTotal.innerText = '$' + grandTotalValue.toFixed(2);
  }
};

window.resetValues = () => {
  tipValue.innerText = '$0.00';
  personTotal.innerText = '$0.00';
  grandTotal.innerText = '$0.00';
  inputBill.value = '';
  inputPeople.value = '';
  customValue.value = '';
};

inputBill.addEventListener('input', calculateTip);
inputPeople.addEventListener('input', calculateTip);
customValue.addEventListener('input', calculateTip);
