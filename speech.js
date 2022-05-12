// 再生ボタン
const start = document.querySelector('#btnStart');

// 再生に関する設定
const speechSet = new SpeechSynthesisUtterance();
speechSet.text = "たたいて、かぶって、ジャン・ケン・ポン";
speechSet.lang = 'ja-JP';

// ボタンクリックイベント
start.addEventListener('click', function(){
  // 喋るスピードをランダムに
  speechSet.rate = Number((Math.random() * 6).toFixed(2));
  // 再生
  speechSynthesis.speak(speechSet);
}, false);
