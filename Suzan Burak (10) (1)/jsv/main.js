const letterInput = document.getElementById('letterInput');
const answer = document.querySelector('.answer');
const searchBtn = document.querySelector('.search');
const message = document.querySelector('.message');
const messageText = document.querySelector('.mes');
const blur = document.querySelector('.blur');
const restartMessage = document.querySelector('.restartMessage');
const keys = [...document.querySelectorAll('.keyboard div')];
const head = document.querySelector('.head');
const mouth = document.querySelector('.mouth');
const armL = document.querySelector('.arm-l');
const armR = document.querySelector('.arm-r');
const body = document.querySelector('.body');
const legL = document.querySelector('.leg-l');
const legR = document.querySelector('.leg-r');
// Klavyede ki harfleri input ile birlikte kullanmak
keys.forEach(key => {
  key.addEventListener('click',() => {
    letterInput.value = key.innerText;
    searchBtn.click();
    key.classList.add('disabled');
  })
})
// Kelimeler
const words = [
  'Kelime',
  'Araba',
  'Çiçek',
  'Devlet',
  'Internet',
  'Sanayi',
  'Sanat',
  'Bilgisayar',
  'Hayvan',
  'Dünya',
  'Hatıra',
  'Yazı',
  'Hava Durumu',
  'Bilgi',
  'Ürün',
  'El',
  'Insan',
  'Sistem',
  'Kitap',
  'Ses',
  'Göz',
  'Genç',
  'Mevzu',
  'Hak',
  'Sosyal',
  'Medya',
  'Silgi',
  'Ilan',
  'Hava'
]
const randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
// span oluşturma ve ekleme
for(i = 0; i < randomWord.length; i++) {
  let span = document.createElement('span');
  span.classList.add('iamspan');
  span.innerText = '_ ';
  answer.appendChild(span);
}
let a = 0;
let spans = document.querySelectorAll('.iamspan');
let spansArr = [...spans];
let spansInner = [];
// klavyedeki tuşa basma
searchBtn.addEventListener('click' , () => {

  if(letterInput.value != "") {
    const lettersOfRandomWord = [...randomWord];
    let val = "";
    if(letterInput.value == 'I' || letterInput.value == "ı"){
      let value = letterInput.value = "ı";
      val = value;
    } else if (letterInput.value == 'İ' || letterInput.value == "İ"){
      let value = letterInput.value = "i";
      val = value;
    } else {
      let value = letterInput.value.toLowerCase();
      val = value;
    }
    for(i = 0; i <= 50; i++) {

      if (val == lettersOfRandomWord[i]) {
        spansArr[i].innerText = val;
      } else if (!lettersOfRandomWord.includes(val)) {
        if (i == 40) {
          if(a == 0) {
            head.style.opacity = "1";
            head.style.visibility = "visible";
            a += 1;
          } else if (a == 1) {
            body.style.opacity = "1";
            body.style.visibility = "visible";
            a += 1;
          } else if (a == 2) {
            armL.style.opacity = "1";
            armL.style.visibility = "visible";
            a += 1;
          } else if (a == 3) {
            armR.style.opacity = "1";
            armR.style.visibility = "visible";
            a += 1;
          } else if (a == 4) {
            legL.style.opacity = "1";
            legL.style.visibility = "visible";
            a += 1;
          } else if (a == 5) {
            legR.style.opacity = "1";
            legR.style.visibility = "visible";
            a += 1;
            message.style.background = "rgba(250, 20, 0, 1)";
            messageText.innerText = "Yanlış Bildiniz!";
            message.style.left = "0";
            blur.style.transform = "scale(1)";
            restartMessage.style.transform = "scale(1)";
            mouth.style.borderRadius = "0";
            // Beş saniye sonra yokolacak
            let u = 0;
            let countdown = () => {
              u += 1;
              if(u == 5) {
                message.style.left = "-100%";
                clearInterval(myCountdown);
              }
            }
            let myCountdown = setInterval(countdown,1000);
          }
        }
      }

    }
    let answerInner = [...answer.innerText];
    const checkAnswer = (el) => {
      return el.indexOf('_') == -1;
    }
    if(answerInner.every(checkAnswer)) {
      message.style.background = "rgba(0, 90, 250, 1)";
      messageText.innerText = "Tebrikler!";
      message.style.left = "0";
      blur.style.transform = "scale(1)";
      restartMessage.style.transform = "scale(1)";
      let u = 0;
      let countdown = () => {
        u += 1;
        if(u == 5) {
          message.style.left = "-100%";
          clearInterval(myCountdown);
        }
      }
      let myCountdown = setInterval(countdown,1000);
    }
    letterInput.value = "";
    letterInput.focus();
  }

})

restartMessage.addEventListener('click',() => {
  location.reload();
})