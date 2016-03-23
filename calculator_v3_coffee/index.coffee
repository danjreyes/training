numConcatArray = []
value=""

btnPress = (number) ->
    numConcatArray.push(number)
    value=""
    for x in numConcatArray
        value+=x
    document.getElementById('input').value = value

erase = ()->
    numConcatArray.length = 0;
    value="";
    document.getElementById('input').value = "";

calcText = () ->
    answer = 0;
    input = document.getElementById('input');
    console.log(input);
    answer= eval(input.value);
    input.value = answer;
    numConcatArray.length = 0;
    numConcatArray.push(answer);
