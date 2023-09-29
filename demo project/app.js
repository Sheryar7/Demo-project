var inputElement = document.getElementById("inputField");
var chars = document.getElementById("charCount");

var totalchars = inputElement.maxLength;

function updateRemChars(event) {
  var enteredInput=event.target.value;
  var enteredLength=enteredInput.length;
  var remChars=totalchars-enteredLength;

  chars.textContent=remChars;
  if (remChars <= 10) {
    document.getElementById("charCount").className = "warning";
    document.getElementById("inputField").className = "warning";
  } else {
    document.getElementById("charCount").className = "charCount";
    document.getElementById("inputField").className = "inputField";
  }
}

inputElement.addEventListener("input",updateRemChars);


// var inputElement=document.getElementById("inputField");
// var chars=document.getElementById("charCount");

// var totalchars=inputElement.maxLength;
// console.log(inputElement);

// function updateRemChars(event){
//     var enteredInput=event.target.value;
//     var enteredLength=enteredInput.length;
//     var remChars=totalchars-enteredLength;
//     chars.textContent=remChars;
//     if(remChars<=10){
//         document.getElementById("charCount").className="warning";
//         document.getElementById("inputField").className="warning";

//     }
//     else{
//         document.getElementById("charCount").className="charCount";
//         document.getElementById("inputField").className="inputField";
//     }
// }
// inputElement.addEventListener("input",updateRemChars);
