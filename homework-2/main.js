// Задание 1
var age = 48;
if (age >= 1 && age <= 17) console.log("Учеба");
else if (age >= 18 && age <= 64) console.log("Работа");
else if (age >= 65 && age <= 100) console.log("Пенсия");

// Задание 2
var numbersArray = [1,2,3,4,5,6,7,8,9];
for (var i in numbersArray) {
	switch (numbersArray[i]) {
		case 1: console.log(numbersArray[i] + " разработчик"); break;
		case 2:
		case 3:
		case 4: console.log(numbersArray[i] + " разработчика"); break;
		case 5:
		case 6:
		case 7:
		case 8:
		case 9: console.log(numbersArray[i] + " разработчиков"); break;
	}
}
