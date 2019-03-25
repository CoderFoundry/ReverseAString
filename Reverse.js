//Use a for loop
function reverseA(str) {
    let reversed = "";
    for(var i = str.length-1;i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

//Use Built in Functions
function reverseB(str){
    return str.split("").reverse().join("");
}

//Call and use it.
function revMe(){
    let revresed = "";
    var str = document.getElementById('value').value;
    reversed = reverseB(str)    
    document.getElementById('result').innerHTML = reversed;    
}