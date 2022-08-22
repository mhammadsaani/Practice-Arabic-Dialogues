const dialoguesData = {
  "میں فری ہوں": "انا فادی",
  "کوئی بات نہیں": "لا بأس",
};

const urduDialogues = Object.keys(dialoguesData);
console.log(urduDialogues);
// console.log(dialoguesData["i am free"]);

const quizEl = document.getElementsByClassName("quiz")[0];
const answerEl = document.getElementsByClassName("answer")[0];

document
  .getElementsByClassName("show-answer")[0]
  .addEventListener("click", function () {
    const eng = quizEl.textContent.toLowerCase();
    answerEl.textContent = dialoguesData[eng];
  });
