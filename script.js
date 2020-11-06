const entryText = document.getElementById("entryText").value;
const entryLetter = document.getElementById("entryLetter").value;

function myFunc(){
    const index = entryText.indexOf(entryLetter);

    document.getElementById("result").innerHTML="Letter Index: " + index;
}