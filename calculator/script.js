let input = document.querySelector(".input")

function addvalue(value){
  input.value += value;
}

function clearelement() {
  input.value = "";
}

function deleteelement(){
  input.value = input.value.slice(0,input.value.length-1)
}

function evaluateExpression() {
 try {
  input.value = eval(input.value) + "🤩"
 } catch (error) {
  input.value = "😵Error";
}
}


