function sale (totalSale){
    return evenSale = highestSale + lowSale;
}

var salesOne = Number(prompt("Enter 1st sales"));
var salesTwo = Number(prompt("Enter 2nd sales"));
var salesThree = Number(prompt("Enter 3rd sales"));
var salesFour = Number(prompt("Enter 4th sales"));
var salesFive = Number(prompt("Enter 5th sales"));
var salesSix = Number(prompt("Enter 6th sales"));
var salesSeven = Number(prompt("Enter 7th sales"));

totalSale = salesOne + salesTwo + salesThree + salesFour + salesFive + salesSix + salesSeven;

salesArray = [];
salesArray.add(salesOne,);
salesArray.add(salesTwo,);
salesArray.add(salesThree,);
salesArray.add(salesFour,);
salesArray.add(salesFive,);
salesArray.add(salesSix,);
salesArray.add(salesSeven);


for(i = 0; i < salesArray.length; i++){
  totalsSale = totalSale * salesArray;
}

averageSale = totalsSale + totalSale;

lowSale = totalSale - totalsSale;
highestSale = totalsSale * totalSale / 2;
weeklySale = totalsSale * totalSale;

document.write(highestSale);
document.write(lowSale);
document.write(averageSale);
document.write(weeklySale);