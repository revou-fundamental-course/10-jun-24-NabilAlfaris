const textareaC = document.getElementById("textareaC")
const textareaF = document.getElementById("textareaF")
const rumus = document.getElementById("rumus")
const buttonC = document.getElementById("buttonC")
const buttonF = document.getElementById("buttonF")
const mainCalculation = document.getElementById("mainCalculation")

// Funtion Konversi
conversiC = () => {
  if (textareaC.value == "") {
    alert("angka tidak boleh Kosong")
  } else {
    textareaF.value = textareaC.value * 1.8 + 32
    rumus.value = `${textareaC.value}C * (9/5) + 32 = ${textareaF.value}F`
  }
}
conversiF = () => {
  if (textareaF.value == "") {
    alert("angka tidak boleh Kosong")
  } else {
    textareaC.value = (textareaF.value - 32) / 1.8;
    rumus.value = `${textareaF.value}F - 32 / 1.8 = ${textareaC.value}C`
  }
}

// Funtion Reset
resetC = () => {
  textareaC.value = ""
}
resetF = () => {
  textareaF.value = ""
}

// Funtion Reverse
buttonF.style.display = "none"
textareaF.disabled = true
mainCalculation.style.display = "flex"
mainCalculation.style.flexDirection = "column"
reverseC = () => {
  buttonF.style.display = "block"
  buttonC.style.display = "none"
  textareaC.disabled = true
  textareaF.disabled = false
  mainCalculation.style.flexDirection = "column-reverse"
  rumus.value = `${textareaF.value}F - 32 / 1.8 = ${textareaC.value}C`
  }
reverseF = () => {
  buttonF.style.display = "none"
  buttonC.style.display = "block"
  textareaF.disabled = true
  textareaC.disabled = false
  mainCalculation.style.flexDirection = "column"
  rumus.value = `${textareaC.value}C * (9/5) + 32 = ${textareaF.value}F`
};

