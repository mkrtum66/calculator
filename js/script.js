const inputCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result');
function input(i) {
    inputCalc.value = inputCalc.value + i;
    if(i=='%'){
        console.log(i)
    }
}
function result() {
    if(eval(inputCalc.value) == undefined){
        resultCalc.value = "0,00";
        inputCalc.value = "0,00";
    }else if(eval(inputCalc.value) == Infinity){
        resultCalc.value = "0,00";
        inputCalc.value = "Do not diving in zero";
    }else{
        inputCalc.value = eval(inputCalc.value);
        resultCalc.value = eval(inputCalc.value);
    }

}
function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1)
}
function reset() {
    resultCalc.value = "";
    inputCalc.value = "";
}
