const dialoguesData = {
  "I am free": "انا فاضي",
  "Does not matter": "لا بأس",
  "Don't panic / worry": "لا تقلق",
  "I do not know": "لا اَدْرِی",
  "I am sorry": "انا آسفٌ",
  "Everything is Good": "کُلُّ شَئْیٍ عَلیٰ مَا یَرَام",
  Good: "جَیِّد",
  "What is going on?": "مَا الاَخْبَار",
  "I am busy": "اَنَا مَشْغُول",
  "See u tomorrow": "اَرَاکَ غَدَاً",
  "Never mind / Don't Worry": "لا عَلَیْک",
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
const startDialogue = document.getElementsByClassName("input")[0];
const endDialogue = document.getElementsByClassName("input")[1];
const btnSubmit = document.getElementsByClassName("btn-submit")[0];
const dialogueInput = document.getElementsByClassName("dialogue-input")[0];
const quizContent = document.getElementsByClassName("quiz-content")[0];
const urduEnglishDialogues = Object.keys(dialoguesData);
console.log(urduEnglishDialogues.length);

let startValue;
let endValue;
let showBtnEl;
let quizEl;
let answerEl;
let nextBtnEl;
let dialougeNumberParagraphEl;

btnSubmit.addEventListener("click", function () {
  endValue = Number(
    Boolean(endDialogue.value)
      ? endDialogue.value <= urduEnglishDialogues.length
        ? endDialogue.value
        : urduEnglishDialogues.length
      : urduEnglishDialogues.length
  );
  startValue = Number(
    Boolean(startDialogue.value)
      ? startDialogue.value < endValue
        ? startDialogue.value
        : 1
      : 1
  );
  console.log(startValue, endValue);
  dialogueInput.style.display = "none";
  quizContent.classList.add("modifier");
  quizContent.innerHTML = `<p class="dialogue-number">Dialogue No. ${startValue}</p>
  <h3 class="quiz">${urduEnglishDialogues[startValue - 1]}</h3>
  <h3 class="answer">? 🤔 ?</h3>
  <div class="btn-container">
    <button  class="btn show-answer"> Show Answer</button>
    <button disabled  class="btn next-btn"> Next </button>
</div>`;
  showBtnEl = document.getElementsByClassName("show-answer")[0];
  showBtnEl.addEventListener("click", function () {
    quizEl = document.getElementsByClassName("quiz")[0];
    answerEl = document.getElementsByClassName("answer")[0];
    let temp = quizEl.textContent;
    // temp = temp.slice(1, temp.length - 1);
    console.log(temp);
    answerEl.textContent = dialoguesData[temp];
    console.log(answerEl.textContent);
  });

  nextBtnEl = document.getElementsByClassName("next-btn")[0];
  nextBtnEl.disabled = false;
  nextBtnEl.addEventListener("click", function () {
    if (startValue === endValue) {
      mainQuizEl.innerHTML = `<button class="btn btn-again"> Reload to Practice Again </button>`;
      mainQuizEl.style.height = "50vh";
    } else {
      startValue += 1;
      dialougeNumberParagraphEl =
        document.getElementsByClassName("dialogue-number")[0];
      dialougeNumberParagraphEl.textContent = `Dialogue No. ${startValue}`;
      quizEl.textContent = `${urduEnglishDialogues[startValue]}`;
      answerEl.textContent = "? 🤔 ?";
    }
  });
});

// Previous Submit Function
// if (
//   startDialogue.value &&
//   startDialogue.value <= urduEnglishDialogues.length
// ) {
//   endValue = Number(startDialogue.value);
// } else if (
//   startDialogue.value &&
//   startDialogue.value > urduEnglishDialogues.length
// ) {
//   endValue = urduEnglishDialogues.length;
// }
// showBtnEl.disabled = false;
// nextBtnEl.disabled = false;
// dialogueInput.textContent = `Dialogue Number ${count}`;
// quizEl.textContent = "I am free";
// quizEl.classList.remove("initial-quiz");
// answerEl.classList.remove("initial-quiz");

// showBtnEl.addEventListener("click", showAnswer);
// function showAnswer() {
//   const arabicDialogue = quizEl.textContent;
//   answerEl.textContent = dialoguesData[arabicDialogue];
// }

// nextBtnEl.addEventListener("click", nextBtn);
// function nextBtn() {
//   quizEl.textContent = urduEnglishDialogues[count];
//   if (count === endValue) {
//     mainQuizEl.innerHTML = ` <div class="quiz-over"> <h2> Quiz Over </h2> <button class="btn" onclick="startAgain()"=> Start Again? </button> </div> `;
//   }
//   answerEl.textContent = "?";
//   count += 1;
//   dialogueInput.textContent = `Dialogue Number ${count}`;
// }

// const startAgainBtnEl = document.getElementsByClassName("start-again")[0];

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

// testObj = {
//   "گھر کے حالات کیسے ہیں": "کَیْفَ الزَّرُوفُ فی البَیْتْ"
// }
