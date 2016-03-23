var btnPress, calcText, erase, numConcatArray, value;

numConcatArray = [];

value = "";

btnPress = function(number) {
  var i, len, x;
  numConcatArray.push(number);
  value = "";
  for (i = 0, len = numConcatArray.length; i < len; i++) {
    x = numConcatArray[i];
    value += x;
  }
  return document.getElementById('input').value = value;
};

erase = function() {
  numConcatArray.length = 0;
  value = "";
  return document.getElementById('input').value = "";
};

calcText = function() {
  var answer, input;
  answer = 0;
  input = document.getElementById('input');
  console.log(input);
  answer = eval(input.value);
  input.value = answer;
  numConcatArray.length = 0;
  return numConcatArray.push(answer);
};
