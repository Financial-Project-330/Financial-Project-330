var total = 0;
var items = [];
var i = 0;
var smile_reward = '';

function subtract() {
  var expenditure = Number(document.getElementById('expenditure').value);
  if (expenditure <= 0) return; 
  if (total - expenditure < 0) { 
    alert("Balance is negative. Please add income to increase balance"); 
  }
  document.getElementById('expenditure').value = '';
  total = total - expenditure;
  total = Math.round(total*100) / 100;
  document.getElementById('total').innerHTML = 'Balance: $' + total;
  items.push(-expenditure);
  document.getElementById('items').innerHTML += '<li>' + '-$' + Math.abs(items[i]) + '</li>';
  i++;
}

function add() {
  var income = Number(document.getElementById('income').value);
  if (income <= 0) return; 
  if (total + income < 0) { 
    alert("Balance is negative. Please add income to increase balance"); 
  }
  document.getElementById('income').value = '';
  total = total + income;
  total = Math.round(total*100) / 100;
  document.getElementById('total').innerHTML = 'Balance: $' + total;
  items.push(income);
  document.getElementById('items').innerHTML += '<li>' + '+$' + Math.abs(items[i]) + '</li>'; 
  i++;
}

function compare_total_to_goal() {
  var goal = Number(document.getElementById('goalinput').value);
  if (goal <= 0) return; 
  goal = Math.round(goal * 100) / 100; 
  document.getElementById('goal').innerHTML = 'Goal Balance: $' + goal;
  if (goal != 0 && total >= goal) document.getElementById('goal').innerHTML += '<p>' + 'Goal reached!' + '&#128513;'+ '</p';
}


///FOR LOGIN PAGE
var username = ["sky", "star", "sun"];
var password = ["blue", "yellow", "red"];

function login() {
  var match = false;
  var un = document.getElementById("user-name").value;
  var pw = document.getElementById("pass-word").value;
  if (un == '' | pw == '') {
    match = true;
    alert("username and password can't be empty");
  }
  for (var j = 0; j < username.length; j++) {
    if (un == username[j]) {
      match = true;
      if (pw == password[j]) {
        window.location.assign("transaction-list.html");
      }
      else {
        alert("incorrect password");
      }
    }
  }
  if (match == false) {
    alert("incorrect username");
  }
}

function createacc() {
  var match = false;
  var un = document.getElementById("user-name").value;
  var pw = document.getElementById("pass-word").value;
  if (un == '' | pw == '') {
    match = true;
    alert("username and password can't be empty");
  }
  for (var j = 0; j < username.length; j++) {
    if (un == username[j]) {
      match = true;
      alert("choose different username");
    }
  }
  if (match == false) {
    username.push(un);
    password.push(pw);
    window.location.assign("transaction-list.html");
  }
}
