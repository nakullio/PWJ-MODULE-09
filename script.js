// challange 1: your age in days

// using prompt to get data form user
function ageInDays() {
  var birthYear = prompt("What year were you born..my Friend?");
  var ageInDays = (2021 - birthYear) * 365;
  //   insert to the hmtl for ageindays result
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDays + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

// reset fucntion
function reset() {
  document.getElementById("ageInDays").remove();
}
