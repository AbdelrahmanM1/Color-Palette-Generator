const paletteContainer = document.getElementById("palette");

function generateColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

function createColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  colorBox.innerText = color;

  // here copy to clipboard functionality
  colorBox.addEventListener("click", () => {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied ${color} to clipboard!`);
    });
  });
  
  paletteContainer.appendChild(colorBox);
}

document.getElementById("generate").addEventListener("click", () => {
  paletteContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = generateColor();
    createColorBox(color);
  }
});
