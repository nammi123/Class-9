const colorSelect = document.getElementById("colorSelect");
const backgroundColorSelect = document.getElementById("backgroundColorSelect");
const paddingSelect = document.getElementById("paddingSelect");
const fontSizeSelect = document.getElementById("fontSizeSelect");
const fontWeightSelect = document.getElementById("fontWeightSelect");
const styledDiv = document.getElementById("styledDiv");

colorSelect.addEventListener("change", () => {
  styledDiv.style.color = colorSelect.value;
});

backgroundColorSelect.addEventListener("change", () => {
  styledDiv.style.backgroundColor = backgroundColorSelect.value;
});

paddingSelect.addEventListener("change", () => {
  styledDiv.style.padding = paddingSelect.value + "px";
});

fontSizeSelect.addEventListener("change", () => {
  styledDiv.style.fontSize = fontSizeSelect.value + "px";
});

fontWeightSelect.addEventListener("change", () => {
  styledDiv.style.fontWeight = fontWeightSelect.value;
});