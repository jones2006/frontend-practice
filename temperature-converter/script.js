alert("Temperature converter");

function convert() {
  let txt_field = Number(document.getElementById("txt_field").value);
  let fahrenval = (txt_field * 9) / 5 + 32;
  let celcuis = ((txt_field - 32) * 5) / 9;
  let result = document.getElementById("result");

  const conversion = document.getElementById("conversion").value;

  if (conversion == "ftoc") {
    result.innerHTML = `${txt_field}°F = ${celcuis.toFixed(2)}°C ❄️`;
  } else {
    result.innerHTML = `${txt_field}°C = ${fahrenval.toFixed(2)}°F 🔥`;
  }
}
