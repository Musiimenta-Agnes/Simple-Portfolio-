
// The code to allow automatic typing of words on page load
const text = "WEB & GRAPHIC DESIGNER";
const element = document.getElementById("myText");
let i = 0;

function type() {
  element.classList.add("show");
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(type, 200); // 100ms delay between letters
  }
}

window.onload = type;






// const myWord = "Frontend Developer";
// const myElement = document.getElementById("word");
// let a = 0;

// function type() {
//   myElement.classList.add("show");
//   if (i < myWord.length) {
//     myElement.textContent += myWord.charAt(a);
//     a++;
//     setTimeout(type, 100); // 100ms delay between letters
//   }
// }

// window.onload = type;