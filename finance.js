var total = 0;
var items = [];
var i = 0;

function subtract() {
  var expenditure = Number(document.getElementById('expenditure').value);
  document.getElementById('expenditure').value = '';
  total = total - expenditure;
  document.getElementById('total').innerHTML = '$' + total;
  items.push(-expenditure);
  document.getElementById('items').innerHTML += '<li>' + '$' + items[i] + '</li>';
  i++;
}

function add() {
  var income = Number(document.getElementById('income').value);
  document.getElementById('income').value = '';
  total = total + income;
  document.getElementById('total').innerHTML = '$' + total;
  items.push(income);
  document.getElementById('items').innerHTML += '<li>' + '$' + items[i] + '</li>';
  i++;
}
