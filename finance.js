var total = 0;
var items = [];

function subtract() {
  var expenditure = -Number((document.getElementById('expenditure')));
  document.getElementById('expenditure') = '';
  total = total + expenditure;
  document.getElementById('total').value = total;
  items.push(expenditure);
  for (i=0; i<items.length; i++) {
    document.getElementById('items').innerHTML += '<li>' + items[i] + '</li>';
  }
}

function add() {
  var income = Number(document.getElementById('income'));
  document.getElementById('income') = '';
  total = total + income;
  document.getElementById('total').value = total;
  items.push(income);
  for (i=0; i<items.length; i++) {
    document.getElementById('items').innerHTML += '<li>' + items[i] + '</li>';
  }
}
