let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let message = document.querySelector("ul");

let button = document.getElementById("submit");

button.addEventListener("click", () => {
  if (firstName.value.trim() == "" && lastName.value.trim() == "") {
    alert("Please Enter an input");
  } else {
    let allow = prompt("How old are you?");
    let sex = prompt("Male or female?");
    if (sex == "male") {
      let li = document.createElement("li");
      li.textContent =
        "Mr " +
        firstName.value +
        " " +
        lastName.value +
        " [" +
        allow +
        "years old ]";

      document.getElementById("wordSugg").appendChild(li);
    } else if (sex == "female") {
      let li = document.createElement("li");
      li.textContent =
        "Mrs " +
        firstName.value +
        " " +
        lastName.value +
        " [" +
        allow +
        "years old ]";

      document.getElementById("wordSugg").appendChild(li);
    }
  }

  firstName.value = "";
  lastName.value = "";
});
