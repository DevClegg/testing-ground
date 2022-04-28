// var button = document.querySelector("button")
//
// function toggle(){
//   button.classList.toggle("altColour");
// }
// button.addEventListener("click", toggle);

///////////////////////////////////////////////
// The aim of this challenge is to only display the email paragraph when the checkbox is checked!
///////////////////////////////////////////////

//addEventListener

var emailPara = document.getElementById("emailInput")

function toggle(){
  emailPara.classList.toggle("altColor");
}
emailPara.addEventListener("change", toggle);



// checkbox.addEventListener("change", function(){
//   if (this.checked) {
//     emailPara.classList.toggle("visible");
//   } else {
//     console.log("Checkbox is not checked..");
//   }
// }
// });
