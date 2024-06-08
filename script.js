const prefecturalCapital = [
  {
    question: '北海道の県庁所在地は？',
    answers: ['札幌', '福島', '前橋', '秋田'],
  },
  {
    question: '青森県の県庁所在地は？',
    answers: ['青森', '前橋', '秋田', '札幌'],
  },
  {
    question: '岩手県の県庁所在地は？',
    answers: ['盛岡', '福島', '仙台', '山形'],
  },
  {
    question: '宮城県の県庁所在地は？',
    answers: ['仙台', '札幌', '前橋', '水戸'],
  },
  {
    question: '秋田県の県庁所在地は？',
    answers: ['秋田', '盛岡', '青森', '札幌'],
  },
];

let correctAnswer = '';
let remainingQuestions = [...prefecturalCapital];

function questionSet() {
  if (remainingQuestions.length === 1) {
    const endButtons = document.querySelectorAll('.end-button');
    nextButtons.forEach((nextButton, index) => {
      nextButton.textContent = '結果';
      nextButton.removeEventListener('click', leStart);
      nextButton.addEventListener('click', showResult);
    });
  }

  function showResult() {
    const endCard = document.querySelector('.endCard');
    endCard.classList.remove('hidden');
    if (totalPointCount == prefecturalCapital.length) {
      document.querySelector(
        '.endCard-serif'
      ).innerHTML = `${prefecturalCapital.length}問中${totalPointCount}問正解<br>おめでとう！`;
    } else {
      document.querySelector(
        '.endCard-serif'
      ).innerHTML = `${prefecturalCapital.length}問中${totalPointCount}問正解<br>お疲れ様！`;
    }
  }

  const randomIndex = getRandomIndex(remainingQuestions.length);
  const randomQuestion = remainingQuestions[randomIndex];
  remainingQuestions.splice(randomIndex, 1);
  displayQuestion(randomQuestion);
  console.log(remainingQuestions);
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomIndex(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener('DOMContentLoaded', questionSet);

function displayQuestion(questionObj) {
  document.getElementById(
    'question-text'
  ).textContent = `Q. ${questionObj.question}`;
  const shuffledAnswers = shuffleArray([...questionObj.answers]);

  const buttons = document.querySelectorAll('.check');
  buttons.forEach((button, index) => {
    button.textContent = shuffledAnswers[index];
    button.dataset.correct = shuffledAnswers[index] === questionObj.answers[0];
  });
  correctAnswer = questionObj.answers[0];
  totalPoint.textContent = `${prefecturalCapital.length}問中0問正解`;
  document.querySelector(
    '.correct-answer-first'
  ).textContent = `A. ${correctAnswer}`;
}

const correct = document.querySelector('.correct');
const incorrect = document.querySelector('.incorrect');
const correctAnswerFirst = document.querySelector('.correct-answer-first');
const correctAnswerSecond = document.querySelector('.correct-answer-second');
const serif = document.querySelector('.serif');
const totalPoint = document.querySelector('.total-point');
const correctImg1 = document.querySelector('.img1');
const correctImg2 = document.querySelector('.img2');
const correctImg3 = document.querySelector('.img3');
const correctImg4 = document.querySelector('.img4');
let totalPointCount = 0;

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('check')) {
    if (event.target.dataset.correct === 'true') {
      console.log('正解!');
      correct.classList.remove('hidden');
      correctImg2.classList.remove('hidden');
      serif.textContent = 'すごい！';
      totalPointCount += 1;
      correctIncorrect();
    } else {
      console.log('不正解...');
      incorrect.classList.remove('hidden');
      correctImg3.classList.remove('hidden');
      serif.textContent = 'うにゃ';
      correctIncorrect();
    }
  }
});

function correctIncorrect() {
  correctImg1.classList.add('hidden');
  correctAnswerFirst.classList.remove('hidden');
  correctAnswerSecond.classList.add('hidden');
  totalPoint.textContent = `${prefecturalCapital.length}問中${totalPointCount}問正解`;
  questionSet();
}

function leStart() {
  console.log(`wa`);
  correct.classList.add('hidden');
  incorrect.classList.add('hidden');
  correctImg1.classList.remove('hidden');
  correctImg2.classList.add('hidden');
  correctImg3.classList.add('hidden');

  
  document.querySelector('.serif').textContent = 'うーん...';
  correctAnswerFirst.classList.add('hidden');
  correctAnswerSecond.classList.remove('hidden');
  totalPoint.textContent = `${prefecturalCapital.length}問中${totalPointCount}問正解`;
}

const imgButtons = document.querySelectorAll('.img');
imgButtons.forEach((imgButton, index) => {
  imgButton.addEventListener('click', function () {
    leStart();
  });
});

const nextButtons = document.querySelectorAll('.next-button');
nextButtons.forEach((nextButton, index) => {
  nextButton.addEventListener('click', function () {
    leStart();
  });
});
