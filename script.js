const prefecturalCapital = [
  {
    question: '消費者が企業や商品やブランドに対し、高いロイヤルティーや好感を持つことによって構築される深い関係性のことを何というか。',
    answers: ['エンゲージメント', 'リードジェネレーション', 'リードナーチャリング', 'ブランディング'],
  },
  {
    question: '見込み顧客を獲得するための活動を何というか。',
    answers: ['リードジェネレーション', 'リードナーチャリング', 'リードクオリフィケーション', 'リードマネジメント'],
  },
  {
    question: '見込み顧客に対して、段階的かつ効果的にアプローチし、信頼関係を構築しながら受注に結び付けていく手法を何というか。',
    answers: ['リードナーチャリング', 'リードマネジメント', 'リードクオリフィケーション', 'リードジェネレーション'],
  },
  {
    question: 'リードジェネレーションを行う中で、顕在化した見込み顧客から購入可能性の高い見込み顧客を選別することを何というか。',
    answers: ['リードクオリフィケーション', 'リードマネジメント', 'リードナーチャリング', 'リードジェネレーション'],
  },
  {
    question: 'リードジェネレーションで獲得したリードを育成し、商談そして受注に至るまで管理することを何というか。',
    answers: ['リードマネジメント', 'リードナーチャリング', 'リードクオリフィケーション', 'リードジェネレーション'],
  },
  {
    question: '顧客が「認知→興味・関心→比較・検討→購買」にいたるまでの心理的過程をモデル化して、購入へと進んでいくにつれ、その数が減っていく様を漏斗のような図式で表したものを何というか。',
    answers: ['マーケティングファネル', 'カスタマージャーニー', 'カスタマージャーニーマップ', 'ブランディング'],
  },
  {
    question: '商品やサービスのブランドを顧客にとって価値のあるものに仕立て、市場における自社商品・サービスのポジションを明確にすることを何というか。',
    answers: ['ブランディング', 'マーケティングファネル', 'ホワイトペーパー', 'ターゲティング'],
  },
  {
    question: '企業が顧客にとって役立つ、自社サービス・商品の利点や長所をまとめた資料全般のことを何というか。',
    answers: ['ホワイトペーパー', 'ブランディング', 'ペルソナ', 'ターゲティング'],
  },
  {
    question: 'コンバージョンに直接つながった流入経路だけでなく、コンバージョンに至るまでのメディアごとの接点を分析し、貢献度を測ることを何というか。',
    answers: ['アトリビューション', 'トラッキング', 'コンテンツマーケティング', 'トリプルメディア'],
  },
  {
    question: '企業が料金を支払って利用する広告媒体のことを何というか。',
    answers: ['ペイドメディア', 'アーンドメディア', 'オウンドメディア', 'マス広告'],
  },
  {
    question: '消費者の信頼や評判を獲得するための媒体のことを何というか。',
    answers: ['アーンドメディア', 'ペイドメディア', 'オウンドメディア', 'マス広告'],
  },
  {
    question: '企業自らが管理・運営し、消費者に向けて発信する媒体のことを何というか。',
    answers: ['オウンドメディア', 'ペイドメディア', 'アーンドメディア', 'マス広告'],
  },
  {
    question: 'ウェブサイトを構成するテキスト、画像、デザイン、レイアウト情報などを一元的に管理するシステムのことを何というか。',
    answers: ['CMS（Contents Management System）', 'CRM（Customer Relationship Management）', 'MA（Marketing Automation）', 'SFA（Sales Force Automation）'],
  },
  {
    question: 'マーケティング活動を自動化し、見込み顧客を育成するツールのことを何というか。',
    answers: ['MA（Marketing Automation）', 'SFA（Sales Force Automation）', 'CMS（Contents Management System）', 'CRM（Customer Relationship Management）'],
  },
  {
    question: '営業活動を管理するシステムのことを何というか。',
    answers: ['SFA（Sales Force Automation）', 'MA（Marketing Automation）', 'CRM（Customer Relationship Management）', 'CMS（Contents Management System）'],
  },
  {
    question: '顧客関係管理を行うツール・システムのことを何というか。',
    answers: ['CRM（Customer Relationship Management）', 'SFA（Sales Force Automation）', 'MA（Marketing Automation）', 'CMS（Contents Management System）'],
  },
  {
    question: 'ユーザーが必要としている情報を価値のあるコンテンツとして提供し、見込み顧客のニーズを育成し、最終的に購買につなげるためのマーケティング手法のことを何というか。',
    answers: ['コンテンツマーケティング', 'アフィリエイトマーケティング', 'インフルエンサーマーケティング', 'SNSマーケティング'],
  },
  {
    question: 'ブログや自分のサイト内の記事で広告主の商品を宣伝し、購入に至った場合に売り上げの一部がブログやサイト運営者に還元される仕組みのことを何というか。',
    answers: ['アフィリエイト', 'コンテンツマーケティング', 'インフルエンサーマーケティング', 'SNSマーケティング'],
  },
  {
    question: 'ユーザーとサービス・商品の接点のことを何というか。',
    answers: ['UX（User Experience）', 'CX（Customer Experience）', 'UI（User Interface）', 'CUI'],
  },
  {
    question: 'サービスや商品を利用した際のユーザー体験のことを何というか。',
    answers: ['UX（User Experience）', 'UI（User Interface）', 'CX（Customer Experience）', 'CUI'],
  },
  {
    question: '検索エンジンの検索結果の表示順位を高めるためにさまざまな施策を行うことを何というか。',
    answers: ['SEO（Search Engine Optimization）', 'MEO対策', 'LPO対策', 'EFO対策'],
  },
  {
    question: 'ある特定のサイトを訪問したユーザーの行動を追跡、分析することを何というか。',
    answers: ['トラッキング', 'アトリビューション', 'アクセス解析', 'ヒートマップ分析'],
  },
  {
    question: 'Googleが提供するWebサイトのアクセス解析サービスを何というか。',
    answers: ['Google Analytics', 'Google Search Console', 'Google Tag Manager', 'Google Data Portal'],
  },
  {
    question: 'Webサイトを訪問したユーザー情報をスマホやPC内のブラウザに一時的に保存する仕組みを何というか。',
    answers: ['Cookie', 'キャッシュ', 'ローカルストレージ', 'セッションストレージ'],
  },
  {
    question: '「重要業績評価指標」を意味し、ゴールまでのプロセスの達成状況を計測・監視するための定量的な指標を指すものを何というか。',
    answers: ['KPI（Key Performance Indicator）', 'KGI（Key Goal Indicator）', 'CTA（Call To Action）', 'CVR（コンバージョン率）'],
  },
  {
    question: '「経営目標達成指標」を意味し、戦略において最終ゴールを数値設定した指標を指すものを何というか。',
    answers: ['KGI（Key Goal Indicator）', 'KPI（Key Performance Indicator）', 'CTA（Call To Action）', 'CVR（コンバージョン率）'],
  },
  {
    question: '「行動喚起」を意味し、Webサイトを訪問したユーザーに、取ってもらいたい行動を促すことを指すものを何というか。',
    answers: ['CTA（Call To Action）', 'KPI（Key Performance Indicator）', 'KGI（Key Goal Indicator）', 'CVR（コンバージョン率）'],
  },
  {
    question: 'Web上で達成したい成果のことを何というか。',
    answers: ['コンバージョン', 'トランザクション', 'エンゲージメント', 'インプレッション'],
  },
  {
    question: 'クリックされた広告に対して、コンバージョンに至った割合を指すものを何というか。',
    answers: ['CVR（コンバージョン率）', 'CTR（Click Through Rate）', 'CPA（Cost per Acquisition）', 'CPC（Cost Per Click）'],
  },
  {
    question: '広告がWeb上に実際に表示されることを何というか。',
    answers: ['インプレッション', 'クリック', 'ビュー', 'タッチポイント'],
  },
  {
    question: 'Web広告を1,000回表示するごとに発生する広告費用のことを何というか。',
    answers: ['CPM（Cost Per Mille）', 'CPC（Cost Per Click）', 'CPA（Cost per Acquisition）', 'CTR（Click Through Rate）'],
  },
  {
    question: 'Web広告が1クリックを獲得するのにかかる費用のことを何というか。',
    answers: ['CPC（Cost Per Click）', 'CPM（Cost Per Mille）', 'CPA（Cost per Acquisition）', 'CTR（Click Through Rate）'],
  },
  {
    question: 'クリック率のことで、ユーザーへの広告の表示回数のうち、広告がクリックされた回数の割合を指すものを何というか。',
    answers: ['CTR（Click Through Rate）', 'CPC（Cost Per Click）', 'CPM（Cost Per Mille）', 'CVR（コンバージョン率）'],
  },
  {
    question: '商品購入や会員登録などのCV成果を獲得するのにかかる費用を指すものを何というか。',
    answers: ['CPA（Cost per Acquisition）', 'CPC（Cost Per Click）', 'CPM（Cost Per Mille）', 'CTR（Click Through Rate）'],
  },
  {
    question: '投資に対する利益のことで、広告費に対する利益を測る指標を指すものを何というか。',
    answers: ['ROI（Return on Investment）', 'ROAS（Return On Advertising Spend）', 'KPI（Key Performance Indicator）', 'KGI（Key Goal Indicator）'],
  },
  {
    question: '広告の費用対効果のことで、広告費に対して、どれだけ売上として見返りを得られたかを表す指標を指すものを何というか。',
    answers: ['ROAS（Return On Advertising Spend）', 'ROI（Return on Investment）', 'KPI（Key Performance Indicator）', 'KGI（Key Goal Indicator）'],
  },
  {
    question: '自社の商品を購入してもらえる顧客層を選定し、ターゲットを絞り込むことを何というか。',
    answers: ['ターゲティング', 'ペルソナ', 'カスタマージャーニー', 'セグメンテーション'],
  },
  {
    question: '自社商品・サービスのターゲットとなるユーザー像を実存する人物のように詳細に設定することを何というか。',
    answers: ['ペルソナ', 'ターゲティング', 'カスタマージャーニー', 'セグメンテーション'],
  },
  {
    question: '顧客が商品やサービスを認知して購入を決定するまでのプロセスを指すものを何というか。',
    answers: ['カスタマージャーニー', 'ペルソナ', 'ターゲティング', 'セグメンテーション'],
  },
  {
    question: 'オンラインで得られるデータを利用するマーケティングのことを何というか。',
    answers: ['デジタルマーケティング', 'インターネットマーケティング', 'オンラインマーケティング', 'Webマーケティング'],
  },
];


let correctAnswer = '';
let remainingQuestions = [...prefecturalCapital];

function questionSet() {
  if (remainingQuestions.length === 1) {
    nextButtons.forEach((nextButton, index) => {
      nextButton.classList.add('hidden');
    });
    const endButtons = document.querySelectorAll('.end-button');
    endButtons.forEach((endButton, index) => {
      endButton.classList.remove('hidden');
    });
  }

  const endButtons = document.querySelectorAll('.end-button');
  endButtons.forEach((endButton, index) => {
    endButton.addEventListener('click', function () {
      showResult();
    });
  });

  function showResult() {
    const endCard = document.querySelector('.endCard');
    endCard.classList.remove('hidden');
    if (totalPointCount == prefecturalCapital.length) {
      document.querySelector(
        '.endCard-serif'
      ).innerHTML = `${prefecturalCapital.length}問中${totalPointCount}問正解<br>おめでとう！<br>（リロードしてね）`;
    } else {
      document.querySelector(
        '.endCard-serif'
      ).innerHTML = `${prefecturalCapital.length}問中${totalPointCount}問正解<br>お疲れ様！<br>（リロードしてね）`;
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
}

function leStart() {
  console.log(`wa`);
  correct.classList.add('hidden');
  incorrect.classList.add('hidden');
  correctImg1.classList.remove('hidden');
  correctImg2.classList.add('hidden');
  correctImg3.classList.add('hidden');
  questionSet();

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
