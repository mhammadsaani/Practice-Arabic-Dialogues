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
  "Do not worry / Never mind": "لا عَلَیْک",
  "Wait for me": "اِنْتَظِرْنی",
  "Thanks a lot": "شكراً جَزِيْلَاً",
  "I understand": "أفْھَمْ",
  "i am sure": "انا مُتَأکِّدٌ",
  "This is not right": "هذا لَیْسَ صَحَیْحًا",
  "Is there any question?": "ھْلْ ھُنَاکَ أَیُ سُؤُالٍ",
  "Do you have any question": "هل لديك أَیُ سُؤُالٍ",
  Ofcourse: "طَبْعًا / قَطْعًا",
  "I am ready": "انا جاھِز",
  "Don't eat too much": "لَا تَأْکُلْ کَثِیرَاً",
  "leave me alone": "اُتْرُکْنِی لَوَحْدِی",
  "What is new?": "مَا الْجَدِیْد؟",
  "Good luck / Best of luck": "بِالتَّوْفِیق",
  "This is from Allah ": "و ما توفیق الا باللہ",
  "Allah guides us": "اللہُ یَھْدِیْک",
  "Allah protects us": "اللہُ یَحْمِیْک",
  "Who is with you?": "مَنْ مَعَکَ؟",
  "Don't disturb me": "لا تُزعِجنِي",
  Yes: "نعم/ أجَل / بَلیٰ",
  "Who said this?": "مَنْ قَالَ ذَلِک",
  "This is great": "هذا رَائِعٌ / عَظِیم",
  "I will call you": "سَأَتَّصِلُ بِکَ",
  "Let me think": "دَعْنِي أُفَكِّرُ",
  "This gift is for you": "ھذہ ھَدِیّۃُ لَکَ",
  "I agree": "انا اُوَافِقْ",
  "Forgive me": "سَامِحْنِي",
  "I sleep": "انا اَنَام",
  "We sleep": "نحن ننام",
  "He sleeps": "ھو یَنَام",
  "She sleeps": "ھی تَنَام",
  "I am here": "انا ھُنَا",
  "I am very strong": "انا قَوِیٌ جِدًا",
  "I love my brother": "انا أُحِبُّ أخِی",
  "I love you": "انا أُحِبُّ انت / اُحِبّکَ",
  "Where are u from?": "مِنْ أینَ أنْتَ؟",
  "I am thinking": "انا اُفَکِّرُ",
  "What are you doing?": "ماذا تَعْمَلٗ؟",
  "I am sleepy": "اَغْلُبُنِی النُّعَاس",
  "What is your opinion?": "ما رأيك؟",
  "I love my family": "اَنَا أُحِبُّ اُسْرَتِی / عَائِلَتِی",
  "I speak the Arabic Language": "أَنَا أَتَکَلَّمُ اللُّغَۃَ العَرَبِیَّۃ",
  "I love the Arabic Language": "أنَا أُحِبُّ اللُّغَۃَ العَرَبِیَّۃ",
  "I love reading": "انا أُحِبُّ القِرَاءَۃَ",
  "I am feeling sad": "اَشْعُرُ بالسُّوءِ",
  "We are friends": "أَصْبَحْنَا أَصْدِقَاءَ",
  "I am sad": "أنا حَزِین",
  "I am hungry": "أنا جَوْعَان جِدًا",
  "I am angry": "أنا غَضْبَان",
  "I am happy": "انا فَرْحَان",
  "I am in fear": "أنا خَائِفْ",
  "I am disgust": "انا قَرْفَانْ",
  "I am surprised": "انا مُنْدَھِشْ",
  "Are you sure?": "ھَل اَنْتَ مُتَأَکِد؟",
  "Are you ready?": "ھَل اَنْتَ جَاھِز؟",
  "Are you good?": "ھَل اَنْتَ بِخَیر؟",
  "Are you serious?": "ھَل اَنْتَ جَاد؟",
  "Are you sick?": "ھَل اَنْتَ مَرِیض؟",
  "Are you busy?": "ھَل اَنْتَ مَشْغُول؟",
  "Are you tired?": "ھَل اَنْتَ مُتَعِبْ؟",
  "Are you married?": "ھَل اَنْتَ مُتَزَوِّج؟",
  "Are you single?": "ھَل اَنْتَ أعْزَب؟",
  "Are you blind?": "ھَل اَنْتَ أعَمِی؟",
  "Don't forget?": "لا تُنْسْ",
  "Don't be?": "لا تَکُن",
  "Don't touch": "لا تَلْمَسْ",
  "Don't say": "لا تَقُلْ",
  "Don't leave": "لا تَغَادِر",
  "Don't call": "لا تَتَصِل",
  "Don't hurt": "لا تُؤذِی",
  "Don't smoke": "لا تَدَّخُنْ",
  "Don't do": "لا تَفْعَلْ",
  "Don't believe": "لا تَصْدِقْ ذَلک",
  Early: "مُبَکِّرْ / بَاکِراً",
  Late: "مُتَأَخِّراً",
  Recently: "قَرِیباً",
  Often: "غَالِباً",
  Seldom: "نَادِراً",
  Sometimes: "أحْیَاناً",
  "At last": "أخِیراً",
  Tomorrow: "غَدَاً",
  Yesterday: "أمْسْ",
  Now: "الآن",
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
let btnAgain;

btnSubmit.addEventListener("click", mainFun);

function mainFun() {
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

  dialogueInput.style.display = "none";
  quizContent.classList.add("modifier");
  mainQuizEl.style.padding = "2em";
  quizContent.innerHTML = `<p class="dialogue-number">Dialogue No. ${startValue}</p>
  <h3 class="quiz">${urduEnglishDialogues[startValue - 1]}</h3>
  <h3 class="answer">? 🤔 ?</h3>
  <div class="btn-container">
    <button  class="btn show-answer"> Show Answer</button>
    <button  class="btn next-btn"> Next </button>
</div>`;

  quizEl = document.getElementsByClassName("quiz")[0];
  answerEl = document.getElementsByClassName("answer")[0];
  showBtnEl = document.getElementsByClassName("show-answer")[0];

  showBtnEl.addEventListener("click", function () {
    let temp = quizEl.textContent;
    // temp = temp.slice(1, temp.length - 1);
    console.log(temp);
    answerEl.textContent = dialoguesData[temp];
    console.log(answerEl.textContent);
  });

  nextBtnEl = document.getElementsByClassName("next-btn")[0];
  nextBtnEl.addEventListener("click", function () {
    if (startValue === endValue - 1) {
      mainQuizEl.innerHTML = `<button class="btn btn-again"> Reload to Practice Again </button>`;
      mainQuizEl.classList.add("flex-center");
      mainQuizEl.style.height = "50vh";
      btnAgain = document.getElementsByClassName("btn-again")[0];
      btnAgain.addEventListener("click", function () {
        location.reload();
      });
    } else {
      startValue += 1;
      dialougeNumberParagraphEl =
        document.getElementsByClassName("dialogue-number")[0];
      dialougeNumberParagraphEl.textContent = `Dialogue No. ${startValue}`;
      quizEl.textContent = `${urduEnglishDialogues[startValue]}`;
      answerEl.textContent = "? 🤔 ?";
    }
  });
}

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
