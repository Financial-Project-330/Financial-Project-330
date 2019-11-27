var total = 1500;
var items = [
    [0, 0],
    [1, 1600],
    [2, 1300],
    [3, 1500],
    [4, 1600],
    [5, 1500]
];
var i = 6;
var smile_reward = '';
var name = '';

function compare() {
    var currentgoal = document.getElementById('goal').innerHTML;
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
    document.getElementById('total').innerHTML = 'Balance: $' + total;
    items.push([i, total]);
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
    document.getElementById('total').innerHTML = 'Balance: $' + total;
    items.push([i, total]);
    document.getElementById('items').innerHTML += '<li>' + '+$' + income.toLocaleString() + '</li>';
    i++;
    drawBasic();
}

function compare_total_to_goal() {
    var goal = Number(document.getElementById('goalinput').value);
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

google.charts.load('current', {
    packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Transactions');
    data.addColumn('number', 'Total ($)');

    data.addRows(items);

    var options = {
        hAxis: {
            title: 'Transaction'
        },
        vAxis: {
            title: 'Total ($)'
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('total-graph'));
    chart.draw(data, options);
}
