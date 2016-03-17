
/*
Multiline comment
 */
var Animal, aString, age, areYouHappy, balance, chicken, chickenName, childAge, coat, combinedArray, csOutput, derek, employee, employeeIndex, employees, evensOnly, fName, factorial, getRandNum, gloves, hat, helloFunc, i, j, k, l, lName, largeNumStr, largestNum, len, len1, len2, len3, len4, len5, longString, m, monkeys, movieRank, n, name, o, oneTo10, p, peopleArray, precisionTest, q, randArray, randNum, schoolGrade, smallNumStr, smallestNum, strArray, sumNums, sumOfArray, tenTo1, votingAge, x, y,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  slice = [].slice;

name = "Phil";

csOutput = document.getElementById("csoutput");

csOutput.innerHTML = "Hello " + name + "<br>";

aString = "I'm a String";

if (typeof aString === 'string') {
  csOutput.insertAdjacentHTML('beforeend', 'aString is a String<br>');
}

largestNum = Number.MAX_VALUE;

smallestNum = Number.MIN_VALUE;

largeNumStr = "The largest number is " + largestNum + "<br>";

smallNumStr = "The smallest number is " + smallestNum + "<br>";

csOutput.insertAdjacentHTML('beforeend', largeNumStr + smallNumStr + '<br>');

areYouHappy = false;

if (typeof areYouHappy === 'boolean') {
  csOutput.insertAdjacentHTML('beforeend', 'areYouHappy is a Boolean<br>');
}

csOutput.insertAdjacentHTML('beforeend', "5+2 = " + (5 + 2) + "<br>");

csOutput.insertAdjacentHTML('beforeend', '5+2 = #{5+2}<br>');

precisionTest = 0.1000000000000001;

csOutput.insertAdjacentHTML('beforeend', "Precision : " + (precisionTest + 0.10000000000000011) + "<br>");

balance = 1563.87;

csOutput.insertAdjacentHTML('beforeend', "Monthly Payment =  " + ((balance / 12).toFixed(2)) + "<br>");

randNum = 5;

csOutput.insertAdjacentHTML('beforeend', "randnum++ =  " + (randNum++) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "++randnum =  " + (++randNum) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "randnum-- =  " + (randNum--) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "--randnum =  " + (--randNum) + "<br>");

randNum = Math.floor(Math.random() * 100 + 1);

csOutput.insertAdjacentHTML('beforeend', "Random number between 1 and 100 =  " + randNum + "<br>");

fName = "Daniel";

lName = "Reyes";

csOutput.insertAdjacentHTML('beforeend', fName + " " + lName + "<br>");

longString = "This is a long string that goes on forever";

csOutput.insertAdjacentHTML('beforeend', "String Length =  " + longString.length + "<br>");

csOutput.insertAdjacentHTML('beforeend', "Index of String =  " + (longString.indexOf("goes")) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "Index 8 =  " + (longString.charAt(8)) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "Word at 27 =  " + (longString.slice(27, 31)) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "After 27 =  " + (longString.slice(27)) + "<br>");

longString = longString.replace("forever", "and on forever      .");

csOutput.insertAdjacentHTML('beforeend', "New String =  " + longString + "<br>");

strArray = longString.split(" ");

for (j = 0, len = strArray.length; j < len; j++) {
  x = strArray[j];
  csOutput.insertAdjacentHTML('beforeend', x + "<br>");
}

longString = longString.trim();

csOutput.insertAdjacentHTML('beforeend', (longString.toUpperCase()) + "<br>");

csOutput.insertAdjacentHTML('beforeend', (longString.toLowerCase()) + "<br>");

age = 18;

if (age >= 18) {
  csOutput.insertAdjacentHTML('beforeend', "You can vote<br>");
  if (age >= 16) {
    csOutput.insertAdjacentHTML('beforeend', "You can age also<br>");
  }
} else if (age >= 16) {
  csOutput.insertAdjacentHTML('beforeend', "You can drive<br>");
} else {
  csOutput.insertAdjacentHTML('beforeend', "You'll be 16 soon<br>");
}

if (!(age >= 19)) {
  csOutput.insertAdjacentHTML('beforeend', "You are in school<br>");
} else {
  csOutput.insertAdjacentHTML('beforeend', "You may go to college<br>");
}

if (!(age > 4) || (age > 65)) {
  csOutput.insertAdjacentHTML('beforeend', "You don't go to school<br>");
} else if ((age >= 5) && (age <= 6)) {
  csOutput.insertAdjacentHTML('beforeend', "Go to Kindergarten<br>");
} else if ((age > 6) && (age <= 18)) {
  schoolGrade = "Go to Grade " + (age - 5) + "<br>";
  csOutput.insertAdjacentHTML('beforeend', schoolGrade);
} else {
  csOutput.insertAdjacentHTML('beforeend', "Go to Work<br>");
}

votingAge = age > 18 ? true : false;

csOutput.insertAdjacentHTML('beforeend', "Can Vote : " + votingAge + "<br>");

childAge = 8;

switch (childAge) {
  case 5:
    csOutput.insertAdjacentHTML('beforeend', "Go to Kindergarten<br>");
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    csOutput.insertAdjacentHTML('beforeend', "Go to Elementary School<br>");
    break;
  default:
    csOutput.insertAdjacentHTML('beforeend', "Do something<br>");
}

if (age != null) {
  csOutput.insertAdjacentHTML('beforeend', age + " years old<br>");
}

chicken = null;

chickenName = chicken != null ? chicken : "Fred";

csOutput.insertAdjacentHTML('beforeend', "Chicken Name : " + chickenName + "<br>");

hat = "Winter Hat";

coat = "Winter Coat";

gloves = null;

if ((hat != null) && (coat != null)) {
  csOutput.insertAdjacentHTML('beforeend', hat + " " + coat + " " + (gloves != null ? gloves : 'Winter Gloves') + "<br>");
}

randArray = ["word", false, 1234, 1.234];

csOutput.insertAdjacentHTML('beforeend', "Index 2: " + randArray[2] + "<br>");

csOutput.insertAdjacentHTML('beforeend', "Last 2: " + randArray.slice(2, 4) + "<br>");

oneTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tenTo1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

combinedArray = oneTo10.concat(tenTo1);

for (k = 0, len1 = combinedArray.length; k < len1; k++) {
  x = combinedArray[k];
  csOutput.insertAdjacentHTML('beforeend', x + "<br>");
}

oneTo10.push.apply(oneTo10, tenTo1);

for (l = 0, len2 = oneTo10.length; l < len2; l++) {
  x = oneTo10[l];
  csOutput.insertAdjacentHTML('beforeend', x + "<br>");
}

csOutput.insertAdjacentHTML('beforeend', (oneTo10.toString()) + "<br>");

evensOnly = oneTo10.filter(function(x) {
  return x % 2 === 0;
});

csOutput.insertAdjacentHTML('beforeend', (evensOnly.toString()) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "Max: " + (Math.max.apply(Math, oneTo10)) + "<br>");

csOutput.insertAdjacentHTML('beforeend', "Max: " + (Math.min.apply(Math, oneTo10)) + "<br>");

sumOfArray = oneTo10.reduce(function(x, y) {
  return x + y;
});

csOutput.insertAdjacentHTML('beforeend', "Sum: " + sumOfArray + "<br>");

csOutput.insertAdjacentHTML('beforeend', "Reverse: " + (tenTo1.reverse()) + "<br>");

peopleArray = [
  {
    name: "Paul",
    age: 43
  }, {
    name: "Sue",
    age: 39
  }
];

csOutput.insertAdjacentHTML('beforeend', "First Name: " + peopleArray[0].name + "<br>");

for (m = 0, len3 = oneTo10.length; m < len3; m++) {
  x = oneTo10[m];
  csOutput.insertAdjacentHTML('beforeend', x + "<br>");
}

for (n = 0, len4 = oneTo10.length; n < len4; n++) {
  x = oneTo10[n];
  if (x % 2 !== 0) {
    csOutput.insertAdjacentHTML('beforeend', "Odd: " + x + "<br>");
  }
}

for (x = o = 50; o <= 100; x = ++o) {
  if (x % 2 === 0) {
    csOutput.insertAdjacentHTML('beforeend', "Even: " + x + "<br>");
  }
}

for (x = p = 20; p <= 40; x = p += 2) {
  csOutput.insertAdjacentHTML('beforeend', "Even: " + x + "<br>");
}

employees = ["Doug", "Sue", "Paul"];

for (employeeIndex = q = 0, len5 = employees.length; q < len5; employeeIndex = ++q) {
  employee = employees[employeeIndex];
  csOutput.insertAdjacentHTML('beforeend', "Index: " + employeeIndex + " Employee: " + employee + "<br>");
}

if (indexOf.call(employees, "Doug") >= 0) {
  csOutput.insertAdjacentHTML('beforeend', "I found Doug<br>");
}

i = 100;

while ((i += 1) <= 110) {
  csOutput.insertAdjacentHTML('beforeend', "i= " + i + "<br>");
}

monkeys = 10;

while ((monkeys -= 1)) {
  csOutput.insertAdjacentHTML('beforeend', monkeys + " little monkeys, jumping on the bead. One fell off and bumped his head.<br>");
}

x = 0;

while (true) {
  csOutput.insertAdjacentHTML('beforeend', (++x) + "<br>");
  if (x === 5) {
    break;
  }
}

helloFunc = function(name) {
  return "Hello " + name;
};

csOutput.insertAdjacentHTML('beforeend', (helloFunc("Daniel")) + "<br>");

getRandNum = function() {
  return Math.floor(Math.random() * 100) + 1;
};

csOutput.insertAdjacentHTML('beforeend', (getRandNum()) + "<br>");

sumNums = function() {
  var len6, r, sum, vars;
  vars = 1 <= arguments.length ? slice.call(arguments, 0) : [];
  sum = 0;
  for (r = 0, len6 = vars.length; r < len6; r++) {
    x = vars[r];
    sum += x;
  }
  return sum;
};

csOutput.insertAdjacentHTML('beforeend', (sumNums(1, 2, 3, 4, 5)) + "<br>");

movieRank = function(stars) {
  if (stars == null) {
    stars = 1;
  }
  if (stars <= 2) {
    return "Bad";
  } else {
    return "Good";
  }
};

csOutput.insertAdjacentHTML('beforeend', "Movie Rank: " + (movieRank(3)) + "<br>");

factorial = function(x) {
  if (x < 0) {
    return 0;
  }
  if (x === 0 || x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
};

csOutput.insertAdjacentHTML('beforeend', "Factorial of 4: " + (factorial(4)) + "<br>");

derek = {
  name: "Derek",
  age: 41,
  street: "123 Main St"
};

csOutput.insertAdjacentHTML('beforeend', "Name: " + derek.name + "<br>");

derek.state = "Pennsylvania";

for (x in derek) {
  y = derek[x];
  csOutput.insertAdjacentHTML('beforeend', x + " is " + y + "<br>");
}

Animal = (function() {
  function Animal() {}

  Animal.prototype.name = "No Name";

  Animal.prototype.height = 0;

  Animal.prototype.weight = 0;

  Animal.prototype.sound = "No Sound";

  Animal.numOfAnimals = 0;

  Animal.getNumOfAnimals = function() {
    return Animal.numOfAnimals;
  };

  Animal.prototype.contructor = function(name, height, weight) {
    if (name == null) {
      name = "No Name";
    }
    this.height = height != null ? height : 0;
    if (weight == null) {
      weight = 0;
    }
    this.name = name;
    Animals.numofAnimals++;
    return {
      makeSount: function() {
        return "says " + sound;
      },
      getInfo: function() {
        return '#{@name} is #{@height} cm and weights #{@weight} kg and #{@makeSound()}';
      }
    };
  };

  return Animal;

})();
