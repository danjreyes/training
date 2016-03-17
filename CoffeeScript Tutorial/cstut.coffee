###
Multiline comment
###

name = "Phil"

csOutput = document.getElementById("csoutput")

csOutput.innerHTML = "Hello #{name}<br>"

aString = "I'm a String"

csOutput.insertAdjacentHTML('beforeend','aString is a String<br>') if typeof aString is 'string'

largestNum = Number.MAX_VALUE
smallestNum = Number.MIN_VALUE

largeNumStr = "The largest number is #{largestNum}<br>"
smallNumStr = "The smallest number is #{smallestNum}<br>"

csOutput.insertAdjacentHTML('beforeend', largeNumStr + smallNumStr + '<br>')

areYouHappy = no

csOutput.insertAdjacentHTML('beforeend', 'areYouHappy is a Boolean<br>') if typeof areYouHappy is 'boolean'

# We need the double quotes to do math
csOutput.insertAdjacentHTML('beforeend', "5+2 = #{5+2}<br>")
csOutput.insertAdjacentHTML('beforeend', '5+2 = #{5+2}<br>')

precisionTest = 0.1000000000000001

csOutput.insertAdjacentHTML('beforeend', "Precision : #{precisionTest + 0.10000000000000011}<br>")

balance = 1563.87

csOutput.insertAdjacentHTML('beforeend', "Monthly Payment =  #{(balance/12).toFixed(2)}<br>")

randNum = 5

csOutput.insertAdjacentHTML('beforeend', "randnum++ =  #{randNum++}<br>")
csOutput.insertAdjacentHTML('beforeend', "++randnum =  #{++randNum}<br>")

csOutput.insertAdjacentHTML('beforeend', "randnum-- =  #{randNum--}<br>")
csOutput.insertAdjacentHTML('beforeend', "--randnum =  #{--randNum}<br>")

randNum = Math.floor(Math.random() * 100 + 1)

csOutput.insertAdjacentHTML('beforeend', "Random number between 1 and 100 =  #{randNum}<br>")

fName = "Daniel"
lName = "Reyes"

csOutput.insertAdjacentHTML('beforeend', fName + " " + lName + "<br>")

longString = "This is a long string that goes on forever"

csOutput.insertAdjacentHTML('beforeend', "String Length =  #{longString.length}<br>")
csOutput.insertAdjacentHTML('beforeend', "Index of String =  #{longString.indexOf("goes")}<br>")
csOutput.insertAdjacentHTML('beforeend', "Index 8 =  #{longString.charAt(8)}<br>")
csOutput.insertAdjacentHTML('beforeend', "Word at 27 =  #{longString.slice(27,31)}<br>")
csOutput.insertAdjacentHTML('beforeend', "After 27 =  #{longString.slice(27)}<br>")

longString = longString.replace("forever", "and on forever      .")

csOutput.insertAdjacentHTML('beforeend', "New String =  #{longString}<br>")

strArray = longString.split(" ")

for x in strArray
    csOutput.insertAdjacentHTML('beforeend', "#{x}<br>")

longString = longString.trim()

csOutput.insertAdjacentHTML('beforeend', "#{longString.toUpperCase()}<br>")
csOutput.insertAdjacentHTML('beforeend', "#{longString.toLowerCase()}<br>")

age = 18

if age >= 18
    csOutput.insertAdjacentHTML('beforeend', "You can vote<br>")

    if (age >=16)
        csOutput.insertAdjacentHTML('beforeend', "You can age also<br>")

else if (age >=16)
    csOutput.insertAdjacentHTML('beforeend', "You can drive<br>")

else
    csOutput.insertAdjacentHTML('beforeend', "You'll be 16 soon<br>")

unless (age >= 19)
    csOutput.insertAdjacentHTML('beforeend', "You are in school<br>")

else
    csOutput.insertAdjacentHTML('beforeend', "You may go to college<br>")

if !(age > 4) || (age > 65)
    csOutput.insertAdjacentHTML('beforeend', "You don't go to school<br>")
else if (age >= 5) && (age <= 6)
    csOutput.insertAdjacentHTML('beforeend', "Go to Kindergarten<br>")
else if (age > 6) && (age <= 18)
    schoolGrade = "Go to Grade #{age - 5}<br>"
    csOutput.insertAdjacentHTML('beforeend', schoolGrade)
else
    csOutput.insertAdjacentHTML('beforeend', "Go to Work<br>")

votingAge = if age > 18 then true else false

csOutput.insertAdjacentHTML('beforeend', "Can Vote : #{votingAge}<br>")

childAge = 8

switch childAge
    when 5 then csOutput.insertAdjacentHTML('beforeend', "Go to Kindergarten<br>")
    when 6, 7, 8, 9, 10 then csOutput.insertAdjacentHTML('beforeend', "Go to Elementary School<br>")
    else csOutput.insertAdjacentHTML('beforeend', "Do something<br>")

if age?
    csOutput.insertAdjacentHTML('beforeend', "#{age} years old<br>")

chicken = null

chickenName = chicken ? "Fred"

csOutput.insertAdjacentHTML('beforeend', "Chicken Name : #{chickenName}<br>")

hat = "Winter Hat"
coat = "Winter Coat"
gloves = null

if hat? and coat?
    csOutput.insertAdjacentHTML('beforeend', "#{hat} #{coat} #{gloves ? 'Winter Gloves'}<br>")

randArray = ["word", false, 1234, 1.234]

csOutput.insertAdjacentHTML('beforeend', "Index 2: #{randArray[2]}<br>")
csOutput.insertAdjacentHTML('beforeend', "Last 2: #{randArray[2..3]}<br>")
oneTo10 = [1..10]
tenTo1 = [10..1]

combinedArray = oneTo10.concat tenTo1

for x in combinedArray
    csOutput.insertAdjacentHTML('beforeend', "#{x}<br>")

oneTo10.push tenTo1...

for x in oneTo10
    csOutput.insertAdjacentHTML('beforeend', "#{x}<br>")

csOutput.insertAdjacentHTML('beforeend', "#{oneTo10.toString()}<br>")

evensOnly = oneTo10.filter (x) -> x % 2 == 0
csOutput.insertAdjacentHTML('beforeend', "#{evensOnly.toString()}<br>")

csOutput.insertAdjacentHTML('beforeend', "Max: #{Math.max oneTo10...}<br>")

csOutput.insertAdjacentHTML('beforeend', "Max: #{Math.min oneTo10...}<br>")

sumOfArray = oneTo10.reduce (x,y) -> x+y

csOutput.insertAdjacentHTML('beforeend', "Sum: #{sumOfArray}<br>")

csOutput.insertAdjacentHTML('beforeend', "Reverse: #{tenTo1.reverse()}<br>")

peopleArray = [
    {
        name: "Paul"
        age: 43
    }
    {
        name: "Sue"
        age: 39
    }
]

csOutput.insertAdjacentHTML('beforeend', "First Name: #{peopleArray[0].name}<br>")

for x in oneTo10
    csOutput.insertAdjacentHTML('beforeend', "#{x}<br>")

for x in oneTo10 when x%2 isnt 0
    csOutput.insertAdjacentHTML('beforeend', "Odd: #{x}<br>")

for x in [50..100] when x%2 is 0
    csOutput.insertAdjacentHTML('beforeend', "Even: #{x}<br>")

for x in [20..40] by 2
    csOutput.insertAdjacentHTML('beforeend', "Even: #{x}<br>")

employees = [
    "Doug"
    "Sue"
    "Paul"
]

for employee, employeeIndex in employees
    csOutput.insertAdjacentHTML('beforeend', "Index: " + employeeIndex + " Employee: " + employee + "<br>")

if "Doug" in employees
    csOutput.insertAdjacentHTML('beforeend', "I found Doug<br>")

i = 100

while (i += 1) <= 110
    csOutput.insertAdjacentHTML('beforeend', "i= #{i}<br>")

monkeys = 10

while (monkeys -= 1)
    csOutput.insertAdjacentHTML('beforeend', "#{monkeys} little monkeys, jumping on the bead. One fell off and bumped his head.<br>")

x = 0

loop
    csOutput.insertAdjacentHTML('beforeend', "#{++x}<br>")
    break unless x != 5

# Functions

helloFunc = (name) ->
    return "Hello #{name}"

csOutput.insertAdjacentHTML('beforeend', "#{helloFunc("Daniel")}<br>")

getRandNum = ->
    return Math.floor(Math.random() * 100) + 1

csOutput.insertAdjacentHTML('beforeend', "#{getRandNum()}<br>")

sumNums = (vars...) ->
    sum = 0
    for x in vars
        sum += x
    return sum

csOutput.insertAdjacentHTML('beforeend', "#{sumNums(1,2,3,4,5)}<br>")

movieRank = (stars = 1) ->
    if stars <= 2
        "Bad"
    else
        "Good"

csOutput.insertAdjacentHTML('beforeend', "Movie Rank: #{movieRank(3)}<br>")

factorial = (x) ->
    return 0 if x < 0
    return 1 if x == 0 or x == 1
    return x * factorial(x - 1)

csOutput.insertAdjacentHTML('beforeend', "Factorial of 4: #{factorial(4)}<br>")

derek = {name: "Derek", age: 41, street: "123 Main St"}

csOutput.insertAdjacentHTML('beforeend', "Name: #{derek.name}<br>")

derek.state = "Pennsylvania"

for x, y of derek
    csOutput.insertAdjacentHTML('beforeend', x + " is " + y + "<br>")

class Animal
    name: "No Name"
    height: 0
    weight: 0
    sound: "No Sound"

    @numOfAnimals: 0

    @getNumOfAnimals: () ->
        Animal.numOfAnimals

    contructor: (name = "No Name", @height = 0, weight = 0) ->
        @name = name

        Animals.numofAnimals++

        makeSount: ->
            "says #{sound}"

        getInfo: ->
            '#{@name} is #{@height} cm and weights #{@weight} kg and #{@makeSound()}'

# stop video (tutorial 2) at 21.49
