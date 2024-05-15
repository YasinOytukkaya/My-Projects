'use strict';
/*
//querySelector ile bölgeyi seçiyoruz. textContent ile içeriği seçiyoruz
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Değiştirdim';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// YUKARIDAKİ ÖRNEKLERDE CLASS'A MÜDAHELE ETTİK. DOM MANİPULATİON 73

// check class'ına dinleyici yerleştirdim. Tıkladığında guess'ten value alsın.
//number içine alırsan sadece numara olur diğer türlü string

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //sayı olm adığında kural
  if (!guess) {
    // !guess = guess tersi,olumsuzu
    // document.querySelector('.message').textContent = '🙆‍♂️ No number';
    displayMessage('🙆‍♂️ No number');
  }

  //oyuncu numarayı bildiğinde
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 CORRECT NUMBER :)';
    displayMessage('🎉 CORRECT NUMBER :)');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //oyuncu numaradan yüksek söylediğinde
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🧨 You lost the game!';
      displayMessage('🧨 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //oyuncu numaradan aşağı söylediğinde         // CTRL + K + C YORUM ALIR
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🧨 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //burada numarayı tekrardan random alsın diyoruz

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
