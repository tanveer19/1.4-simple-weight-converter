const outputDiv = document.querySelector("#output");
outputDiv.style.visibility = "hidden";

let input = document.querySelector("#input");
input.disabled = true;

let grams = document.querySelector("#gramsOutput");
let oz = document.querySelector("#ozOutput");
let lbs = document.querySelector("#lbsOutput");
let kgs = document.querySelector("#kgsOutput");

document.querySelector("#select").addEventListener("input", function (e) {
  // if pound to kilograms
  if (e.target.value === "lbKg") {
    input.disabled = false;
    input.setAttribute("placeholder", "Enter pounds");

    //conversions
    input.addEventListener("input", function (e) {
      outputDiv.style.visibility = "visible";
      let pound = e.target.value;
      grams.innerText = pound * 453.592;
      oz.innerHTML = pound * 16;
      lbs.innerHTML = pound * 1;
      kgs.innerHTML = pound * 0.453592;
      // lbs.parentElement.remove();
    });

    // if kilograms to pounds
  } else if (e.target.value === "kgLb") {
    input.disabled = false;
    input.setAttribute("placeholder", "Enter kilograms");

    //conversions
    input.addEventListener("input", function (e) {
      outputDiv.style.visibility = "visible";
      let kilogram = e.target.value;
      grams.innerText = kilogram * 1000;
      oz.innerHTML = kilogram * 35.274;
      lbs.innerHTML = kilogram * 2.20462;
      kgs.innerHTML = kilogram * 1;
    });

    // if nothing selected
  } else {
    input.setAttribute("placeholder", "");
    input.disabled = true;
    outputDiv.style.visibility = "hidden";
  }
});
