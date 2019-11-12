var total = 0;
var items = [];
var i = 0;
var smile_reward = ''; //new

function subtract() {
  var expenditure = Number(document.getElementById('expenditure').value);
  document.getElementById('expenditure').value = '';
  total = total - expenditure;
  if (total >= 0) {
    document.getElementById('total').innerHTML = 'Balance: $' + total;
  }
  else {
    document.getElementById('total').innerHTML = 'Balance: -$' + Math.abs(total);
  }
  items.push(-expenditure);
  document.getElementById('items').innerHTML += '<li>' + '-$' + Math.abs(items[i]) + '</li>';
  i++;
}

function add() {
  var income = Number(document.getElementById('income').value);
  document.getElementById('income').value = '';
  total = total + income;
  if (total >= 0) {
    document.getElementById('total').innerHTML = 'Balance: $' + total;
  }
  else {
    document.getElementById('total').innerHTML = 'Balance: -$' + Math.abs(total);
  }
  items.push(income);
  document.getElementById('items').innerHTML += '<li>' + '$' + items[i] + '</li>';
  i++;
}

function compare_total_to_goal() { //new
  var goal = Number(document.getElementById('goalinput').value);
  document.getElementById('goal').innerHTML = 'Goal Balance: $' + goal;
  if (goal != 0 && total >= goal) document.getElementById('goal').innerHTML += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Goal reached!' + '&#128513;';
}
