var total = 0;
var items = [];
var i = 0;
var smile_reward = '';

function subtract() {
  var expenditure = Number(document.getElementById('expenditure').value);
  if (expenditure <= 0) return; //new
  //expenditure = Math.round(expenditure * 100) / 100; //new
  //expenditure = Number(Math.round(expenditure+'e2')+'e-2');
  if (total - expenditure < 0) { //new
    alert("Balance is negative. Please add income to increase balance"); //new
    return; //new
  }
  document.getElementById('expenditure').value = '';
  total = total - expenditure;
  total = Math.round(total*100) / 100;
  //if (total >= 0) {
  document.getElementById('total').innerHTML = 'Balance: $' + total;
  //}
  //else {
    //document.getElementById('total').innerHTML = 'Balance: -$' + Math.abs(total);
    //alert("Balance is negative. Please add income to increase balance"); //new
    //return; //new
  //}
  items.push(-expenditure);
  document.getElementById('items').innerHTML += '<li>' + '-$' + Math.abs(items[i]) + '</li>';
  i++;
}

function add() {
  var income = Number(document.getElementById('income').value);
  if (income <= 0) return; //new
  //income = Math.round(income * 100) / 100;
  if (total + income < 0) { //new
    alert("Balance is negative. Please add income to increase balance"); //new
    return; //new
  }
  document.getElementById('income').value = '';
  total = total + income;
  total = Math.round(total*100) / 100;
  //if (total >= 0) {
  document.getElementById('total').innerHTML = 'Balance: $' + total;
  //}
  //else {
    //document.getElementById('total').innerHTML = 'Balance: -$' + Math.abs(total);
    //alert("Balance is negative. Please add income to increase balance"); //new
    //return; //new
  //}
  items.push(income);
  document.getElementById('items').innerHTML += '<li>' + '+$' + items[i] + '</li>'; //changed $ to +$
  i++;
}

function modify_input()
{

}

function compare_total_to_goal() {
  var goal = Number(document.getElementById('goalinput').value);
  if (goal <= 0) return; //new
  goal = Math.round(goal * 100) / 100; //new
  document.getElementById('goal').innerHTML = 'Goal Balance: $' + goal;
  //if (goal != 0 && total >= goal) document.getElementById('goal').innerHTML += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Goal reached!' + '&#128513;';
  if (goal != 0 && total >= goal) document.getElementById('goal').innerHTML += '<p>' + 'Goal reached!' + '&#128513;'+ '</p';
}
