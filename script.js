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

document.addEventListener('DOMContentLoaded', questionSet);

const checkButtons = document.querySelectorAll('.check');

function questionSet() {
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

  function getRandomQuestion() {
    const randomIndex = getRandomIndex(prefecturalCapital.length);
    return prefecturalCapital[randomIndex];
  }

  function displayQuestion(questionObj) {
    document.getElementById('question-text').textContent = questionObj.question;
    const shuffledAnswers = shuffleArray([...questionObj.answers]);

    const buttons = document.querySelectorAll('.check');
    buttons.forEach((button, index) => {
      button.textContent = shuffledAnswers[index];
      button.dataset.correct =
        shuffledAnswers[index] === questionObj.answers[0];
    });
  }

  const randomQuestion = getRandomQuestion();
  displayQuestion(randomQuestion);
}

const correct = document.querySelector('.correct');
const incorrect = document.querySelector('.incorrect');
const correctImg1 = document.querySelector('.img1');
const correctImg2 = document.querySelector('.img2');
const correctImg3 = document.querySelector('.img3');
const correctImg4 = document.querySelector('.img4');

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('check')) {
    if (event.target.dataset.correct === 'true') {
      console.log('正解!');
      correct.classList.remove('hidden');
      correctImg1.classList.add('hidden');
      correctImg2.classList.remove('hidden');
      document.querySelector('.serif').textContent = 'すごい！';
    } else {
      console.log('不正解...');
      incorrect.classList.remove('hidden');
      correctImg1.classList.add('hidden');
      correctImg3.classList.remove('hidden');      
      document.querySelector('.serif').textContent = 'うにゃ';
    }
  }
});

const imgButtons = document.querySelectorAll('.img');

imgButtons.forEach((imgButton, index) => {
  imgButton.addEventListener('click', function () {
    console.log(`wa`);
    correct.classList.add('hidden');
    incorrect.classList.add('hidden');
    correctImg1.classList.remove('hidden');
    correctImg2.classList.add('hidden');
    correctImg3.classList.add('hidden');
    questionSet();
    document.querySelector('.serif').textContent = 'うーん...';
  });
});
