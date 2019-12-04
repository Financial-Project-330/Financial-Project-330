var total = 148;
var items = [
    [0, 0, 0],
    [1, -40, 0],
    [2, 260, 0],
    [3, 240, 0],
    [4, 163, 0],
    [5, 148, 0]
];
var i = 6;
var smile_reward = '';
var name = '';
var goalgoal = 0;

function compare() {
    if (goalgoal != 0 && total >= goalgoal) {
        document.getElementById('goal-met').innerHTML = 'Goal reached ' + '&#128513;';
    } else if (goalgoal != 0 && total <= goalgoal) {
      var difference = goalgoal - total;
      document.getElementById('goal-met').innerHTML = 'Below Goal ' + '&#128546;' + ' by $' + difference.toLocaleString();
    }
}

function subtract() {
    var expenditure = Number(document.getElementById('expenditure').value);
    if (expenditure <= 0) return;
    document.getElementById('expenditure').value = '';
    expenditure = Math.round(expenditure * 100) / 100;
    total = total - expenditure;
    total = Math.round(total * 100) / 100;
    document.getElementById('total').innerHTML = 'Balance: $' + total.toLocaleString();
    items.push([i, total, goalgoal]);
    document.getElementById('items').innerHTML += '<li>' + '-$' + expenditure.toLocaleString() + '</li>';
    i++;
    drawBasic();
}

function add() {
    var income = Number(document.getElementById('income').value);
    if (income <= 0) return;
    document.getElementById('income').value = '';
    income = Math.round(income * 100) / 100;
    total = total + income;
    total = Math.round(total * 100) / 100;
    document.getElementById('total').innerHTML = 'Balance: $' + total.toLocaleString();
    items.push([i, total, goalgoal]);
    document.getElementById('items').innerHTML += '<li>' + '+$' + income.toLocaleString() + '</li>';
    i++;
    drawBasic();
}

function compare_total_to_goal() {
    goalgoal = Number(document.getElementById('goalinput').value);
    if (goalgoal <= 0) return;
    goalgoal = Math.round(goalgoal * 100) / 100;
    document.getElementById('goal').innerHTML = '$' + goalgoal.toLocaleString();
    if (goalgoal != 0 && total >= goalgoal) document.getElementById('goal-met').innerHTML = 'Goal reached ' + '&#128513;';
    else if (goalgoal != 0 && total <= goalgoal) {
      var difference = goalgoal - total;
      document.getElementById('goal-met').innerHTML = 'Below Goal ' + '&#128546;' + ' by $' + difference.toLocaleString();
    }
    document.getElementById('goalinput').value = '';
    items.push([i-1,total,goalgoal]);
    drawBasic();
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
            if (pw == password[j] && pw == "blue") {
                window.location.assign("user1-transaction-list.html");
            } else if (pw == password[j] && pw == "yellow") {
                window.location.assign("user2-transaction-list.html");
            } else if (pw == password[j] && pw == "red") {
                window.location.assign("user3-transaction-list.html");
            } else {
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
    var name = un.charAt(0);
    document.getElementById("name").innerHTML = name;
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
