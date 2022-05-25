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
    lbs.parentElement.style.display = "none";
    kgs.parentElement.style.display = "inherit";

    //conversions
    input.addEventListener("input", function (e) {
      outputDiv.style.visibility = "visible";
      let pound = e.target.value;
      grams.innerText = Math.round(pound * 453.592).toFixed(2);
      oz.innerHTML = pound * 16;
      kgs.innerHTML = Math.round(pound * 0.453592).toFixed(2);
    });

    // if kilograms to pounds
  } else if (e.target.value === "kgLb") {
    input.disabled = false;
    input.setAttribute("placeholder", "Enter kilograms");
    lbs.parentElement.style.display = "inherit";
    kgs.parentElement.style.display = "none";

    //conversions
    input.addEventListener("input", function (e) {
      outputDiv.style.visibility = "visible";
      let kilogram = e.target.value;
      grams.innerText = kilogram * 1000;
      oz.innerHTML = Math.round(kilogram * 35.274).toFixed(2);
      lbs.innerHTML = Math.round(kilogram * 2.20462).toFixed(2);
    });

    // if nothing selected
  } else {
    input.setAttribute("placeholder", "");
    input.disabled = true;
    outputDiv.style.visibility = "hidden";
  }
});
