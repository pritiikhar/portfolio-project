function calculate() {

var income = document.getElementById("income").value;
var rent = document.getElementById("rent").value;
var food = document.getElementById("food").value;
var bill = document.getElementById("bill").value;
var petrol = document.getElementById("petrol").value;
var others = document.getElementById("others").value;

var total = Number(rent) + Number(food) + Number(bill) + Number(petrol) + Number(others); 
var savings = Number(income) - total;

document.getElementById("total").value = total;
document.getElementById("savings").value = savings;

}