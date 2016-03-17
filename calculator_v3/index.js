var array1 = [];
value="";

function btnPress(number)
{
    array1.push(number);

    value="";
    for (var i = 0; i < array1.length; i++)
    {
        value+=array1[i];
    }

    document.getElementById('input').value = value;

    console.log((array1.toString()));
}

function erase()
{
    array1.length = 0;
    value="";
    document.getElementById('input').value = "";
}

function calcText()
{
    var answer = 0;
    input = document.getElementById('input');
    console.log(input);
    answer= eval(input.value);
    input.value = answer;
    array1.length = 0;
    array1.push(answer);
}
