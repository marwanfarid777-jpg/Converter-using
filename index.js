let button = document.getElementById("btn");

button.addEventListener("click", function () {
  const gram = parseInt(document.getElementById("gram").value);

  const type = document.getElementById("type").value;

  // Validation
  if (isNaN(gram)) {
    document.getElementById("gram").focus();

    document.getElementById("error").innerHTML =
      "Please provide a valid gram number";

    document.getElementById("output").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML = "";

    switch (type) {
      case "Pounds":
        convertPounds(gram);
        break;

      case "Kilograms":
        convertKilograms(gram);
        break;

      case "Ounces":
        convertOunces(gram);
        break;

      case "Stones":
        convertStones(gram);
        break;

      default:
        alert("Error");
    }
  }
});

// Convert to Pounds
function convertPounds(gram) {
  let pounds = gram * 0.0022;

  document.getElementById("output").innerHTML =
    gram + " grams = " + pounds.toFixed(3) + " pounds";
}

// Convert to Kilograms
function convertKilograms(gram) {
  let kilograms = gram / 1000;

  document.getElementById("output").innerHTML =
    gram + " grams = " + kilograms.toFixed(3) + " kilograms";
}

// Convert to Ounces
function convertOunces(gram) {
  let ounces = gram * 0.035274;

  document.getElementById("output").innerHTML =
    gram + " grams = " + ounces.toFixed(3) + " ounces";
}

// Convert to Stones
function convertStones(gram) {
  let stones = gram * 0.000157;

  document.getElementById("output").innerHTML =
    gram + " grams = " + stones.toFixed(3) + " stones";
}
