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
  expenditure=Math.round(expenditure*100)/100;
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
  income=Math.round(income*100)/100;
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
      //if (pw == password[j]) {
      //  window.location.assign("transaction-list.html");
      //}
      if (pw == password[j] && pw=="blue") {
        window.location.assign("user1-transaction-list.html");
      }
      else if (pw == password[j] && pw=="yellow") {
        window.location.assign("user2-transaction-list.html");
      }
      else if (pw == password[j] && pw=="red") {
        window.location.assign("user3-transaction-list.html");
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

function set_name() {
  var name = document.getElementById("nameinput").value;
  document.getElementById('name').innerHTML = "Name: " + name;
  document.getElementById('nameinput').value = '';
}


function drawLineChart() {
  var data = google.visualization.arrayToDataTable([
  ['Date', 'Balance'],
  ['2019/10/31',  80],
  ['2019/11/05',  -10],
  ['2019/11/17',  60],
  ['2019/11/20',  -20],
  ['2019/11/24',  -40],
  ['2019/11/30',  100],
  ['2019/12/01',  80]
  ]);

  var options = {
    title: 'Input and Expenditure Line Chart',
    legend: { position: 'bottom' },
    width: 500,
    height: 400
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  chart.draw(data, options);
}


function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ['Category', 'Spending'],
    ['Food',     80],
    ['Clothes',      40],
    ['Travelling',  100],
    ['Transportation', 30],
    ['Grocery',    40]
]);

  var options = {
    title: 'Expenditure Categories',
    width: 500,
    height: 400
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
  chart.draw(data, options);
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawLineChart);
google.charts.setOnLoadCallback(drawPieChart);


