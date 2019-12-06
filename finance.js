var total = 0;
var goalbalance = 0;
//var items = [[0,0]];
var items = [[0,0,0]]; //new
var i = 1;
var smile_reward = '';

function compare() {
    var currentgoal = document.getElementById('goal').innerHTML;
    currentgoal = Number(currentgoal.substring(1));
    currentgoal = Math.round(currentgoal * 100) / 100;
    if (currentgoal != 0 && total >= currentgoal) {
        document.getElementById('goal-met').innerHTML = 'Goal reached ' + '&#128513;';
    } else if (currentgoal != 0 && total <= currentgoal) {
        document.getElementById('goal-met').innerHTML = 'Below Goal ' + '&#128546;';
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
    //items.push([i,total]);
    items.push([i,total,goalbalance]); //new
    var category = document.getElementById('expendituredropdown').value;
    //categories.push(category);
    if (category == "Select Category...") {
      category ='';
      document.getElementById('items').innerHTML += '<li>' + '-$' + expenditure.toLocaleString()+ '</li>';
    }
    else document.getElementById('items').innerHTML += '<li>' + '-$' + expenditure.toLocaleString() + ' (' + category + ')' + '</li>';
    document.getElementById('expendituredropdown').value = "Select Category..."
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
    var goal = Number(document.getElementById('goalinput').value); //new
    //items.push([i,total]);
    items.push([i,total,goalbalance]); //new
    var category = document.getElementById("incomedropdown").value;
    //categories.push(category);
    if (category == "Select Category...") {
      category ='';
      document.getElementById('items').innerHTML += '<li>' + '+$' + income.toLocaleString()+ '</li>';
    }
    else document.getElementById('items').innerHTML += '<li>' + '+$' + income.toLocaleString() + ' (' + category + ')' + '</li>';
    document.getElementById('incomedropdown').value = "Select Category..."
    i++;
    drawBasic();
}

function compare_total_to_goal() {
    var goal = Number(document.getElementById('goalinput').value);
    goalbalance = goal; //new
    if (goal <= 0) return;
    goal = Math.round(goal * 100) / 100;
    document.getElementById('goal').innerHTML = '$' + goal.toLocaleString();
    if (goal != 0 && total >= goal) document.getElementById('goal-met').innerHTML = 'Goal reached ' + '&#128513;';
    else if (goal != 0 && total <= goal) {
        document.getElementById('goal-met').innerHTML = 'Below Goal ' + '&#128546;';
    }
    document.getElementById('goalinput').value = '';
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
