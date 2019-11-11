var total = 0;
var items = [];

function subtract() {
  var expenditure = document.getElementById('expenditure');
  document.getElementById('expenditure') = '';
  total = total - Number(expenditure);
  document.getElementById('total').value = total;
  items.push(-Number(expenditure));
  for (i=0; i<items.length; i++) {
    document.getElementById('items').innerHTML += '<li>' + '$' + items[i] + '</li>';
  }
}

function add() {
  var income = document.getElementById('income');
  document.getElementById('income') = '';
  total = total + Number(income);
  document.getElementById('total').value = total;
  items.push(Number(income));
  for (i=0; i<items.length; i++) {
    document.getElementById('items').innerHTML += '<li>' + '$' + items[i] + '</li>';
  }
}
