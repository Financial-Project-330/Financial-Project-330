var total = 0;
var items = [];

function subtract() {
  var expenditure = document.getElementById('expenditure');
  document.getElementById('expenditure') = '';
  total = total - Number(expenditure);
  document.getElementById('total').value = total;
  items.push(-Number(expenditure));
  document.getElementById('items').innerHTML += '<li>' + '$' + items[i] + '</li>';
}

function add() {
  var income = document.getElementById('income');
  document.getElementById('income') = '';
  total = total + Number(income);
  document.getElementById('total').value = total;
  items.push(Number(income));
  document.getElementById('items').innerHTML += '<li>' + '$' + items[i] + '</li>';
}
