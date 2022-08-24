const dialoguesData = {
  "میں فری ہوں": "اَنَا فَادِی",
  "کوئی بات نہیں": "لا بأس",
  "Don't panic / worry": "لا تقلق",
  "میں نہیں جانتا": "لا اَدْرِی",
  "مجھے معاف کرے": "انا آسفٌ",
  "تمام اچھا ہے": "کُلُّ شَئْیٍ عَلیٰ مَا یَرَام",
  "گھر کے حالات کیسے ہیں": "کَیْفَ الزَّرُوفُ فی البَیْتْ",
  اچھا: "جَیِّد",
  "کیا چل رہا ہے. / حالات کیسے ہیں": "مَا الاَخْبَار",
  "میں مصروف ہوں": "اَنَا مَشْغُول",
  "See u tomorrow": "اَرَاکَ غَدَاً",
  "do not worry / never mind / forget it": "لا عَلَیْک",
  "Wait for me": "اِنْتَظِرْنی",
  "Thanks a lot": "شكراً جَزِيْلَاً",
  "I understand": "أفْھَمْ",
  "i am sure": "انا مُتَأکِّدٌ",
  "This is not right": "هذا لَیْسَ صَحَیْحًا",
  "do u have any question": "هل لديك أيُ سؤال",
  Ofcourse: "طَبْعًا / قَطْعًا",
  "I am ready": "انا جاھِز",
  "Don't eat too much": "لا تاکلْ کثیرا",
  "What is new?": "ماالجدید",
  "Good luck / Best of luck": "بالتوفیق",
  "This is from Allah ": "و ما توفیق آلا باللہ",
  "Allah guides us": "اللہ یھدیک",
  "Allah protects us": "اللہ حِفظُک",
  "Who is with you?": "من معک",
  "Don't disturb me": "لا تُزعِجنِي",
  Yes: "نعم/ أجَل / بَلیٰ",
  "Who said this?": "من قال ذلک",
  "This is great": "هذا رائِعٌ / عظیم",
};

const mainQuizEl = document.getElementsByClassName("main-quiz")[0];
const quizEl = document.getElementsByClassName("quiz")[0];
const answerEl = document.getElementsByClassName("answer")[0];
const nextBtnEl = document.getElementsByClassName("next-btn")[0];
const showBtnEl = document.getElementsByClassName("show-answer")[0];
const pwadBodyEl = document.getElementsByClassName("pwad-body")[0];
const inputValue = document.getElementsByClassName("input")[0];
const btnSubmit = document.getElementsByClassName("btn-submit")[0];
const dialogueInput = document.getElementsByClassName("dialouge-input")[0];
const urduEnglishDialogues = Object.keys(dialoguesData);
let count = 1;
let endValue = urduEnglishDialogues.length;

btnSubmit.addEventListener("click", function () {
  if (inputValue.value && inputValue.value <= urduEnglishDialogues.length) {
    endValue = Number(inputValue.value);
  } else if (
    inputValue.value &&
    inputValue.value > urduEnglishDialogues.length
  ) {
    endValue = urduEnglishDialogues.length;
  }
  showBtnEl.disabled = false;
  nextBtnEl.disabled = false;
  dialogueInput.textContent = `Dialogue Number ${count}`;
  quizEl.textContent = "میں فری ہوں";
  quizEl.classList.remove("initial-quiz");
  answerEl.classList.remove("initial-quiz");
});

showBtnEl.addEventListener("click", showAnswer);
function showAnswer() {
  const arabicDialogue = quizEl.textContent;
  answerEl.textContent = dialoguesData[arabicDialogue];
}

nextBtnEl.addEventListener("click", nextBtn);
function nextBtn() {
  quizEl.textContent = urduEnglishDialogues[count];
  if (count === endValue) {
    mainQuizEl.innerHTML = ` <h2> Over </h2> <button class="btn" onclick="startAgain()"=> Start Again? </button> `;
  }
  answerEl.textContent = "?";
  count += 1;
  dialogueInput.textContent = `Dialogue Number ${count}`;
}

// const startAgainBtnEl = document.getElementsByClassName("start-again")[0];

function startAgain() {
  mainQuizEl.textContent = "Reload the Page";
}

// Randomly Selection Algorithm
// function randomIndex(array) {
//   let randomIndx = Math.floor(Math.random() * array.length);
//   return randomIndx;
// }

// nextBtnEl.addEventListener("click", function () {
//   let urduDialogueIndx = randomIndex(urduEnglishDialogues);
//   while (urduEnglishDialogues[urduDialogueIndx] === quizEl.textContent) {
//     urduDialogueIndx = randomIndex(urduEnglishDialogues);
//   }
//   console.log(urduDialogueIndx);
//   quizEl.textContent = urduEnglishDialogues[urduDialogueIndx];
//   answerEl.textContent = "?";
// });
