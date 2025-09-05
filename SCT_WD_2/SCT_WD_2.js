const display = document.getElementById("display");

function appendChar(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value) || "";
  } catch (error) {
    display.value = "Error";
    setTimeout(() => display.value = "", 1000);
  }
}

// Keyboard Input Handling
document.addEventListener("keydown", (event) => {
  if (/[0-9+\-*/%.]/.test(event.key)) {
    appendChar(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteChar();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
