const textareaC = document.getElementById("textareaC")
const textareaF = document.getElementById("textareaF")
const parafC = document.getElementById("parafC")
const parafF = document.getElementById("parafF")
const rumus = document.getElementById("rumus")
const formulaC = document.getElementById("formulaC")
const formulaF = document.getElementById("formulaF")
const buttonC = document.getElementById("buttonC")
const buttonF = document.getElementById("buttonF")
const mainCalculation = document.getElementById("mainCalculation")

// Funtion Konversi
conversiC = () => {
  if (textareaC.value == "") {
    alert("angka tidak boleh Kosong")
  } else {
    textareaF.value = textareaC.value * 1.8 + 32
    rumus.value = `${textareaC.value}C * (9/5) + 32 = ${textareaF.value}°F`
  }
}
conversiF = () => {
  if (textareaF.value == "") {
    alert("angka tidak boleh Kosong")
  } else {
    textareaC.value = (textareaF.value - 32) / 1.8;
    rumus.value = `${textareaF.value}F - 32 / 1.8 = ${textareaC.value}°C`
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
parafF.style.display = "none"
buttonF.style.display = "none"
formulaF.style.display = "none"
textareaF.disabled = true
mainCalculation.style.display = "flex"
mainCalculation.style.flexDirection = "column"
reverseC = () => {
  formulaF.style.display = "block"
  formulaC.style.display = "none"
  parafF.style.display = "block"
  parafC.style.display = "none"
  buttonF.style.display = "block"
  buttonC.style.display = "none"
  textareaC.disabled = true
  textareaF.disabled = false
  mainCalculation.style.flexDirection = "column-reverse"
  rumus.value = `${textareaF.value}F - 32 / 1.8 = ${textareaC.value}°C`
}
reverseF = () => {
  formulaF.style.display = "none"
  formulaC.style.display = "block"
  parafF.style.display = "none"
  parafC.style.display = "block"
  buttonF.style.display = "none"
  buttonC.style.display = "block"
  textareaF.disabled = true
  textareaC.disabled = false
  mainCalculation.style.flexDirection = "column"
  rumus.value = `${textareaC.value}C * (9/5) + 32 = ${textareaF.value}°F`
};

