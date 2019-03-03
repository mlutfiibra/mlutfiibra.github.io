// Event Listener
const btnPlay = document.querySelector('.btn.play')
const btnStopPlay = document.querySelector('.btn.play-stop')
const btnEat = document.querySelector('.btn.eat')
const btnAbout = document.querySelector('.btn.about')
const btnCloseAbout = document.querySelector('.btn.close-about')
const btnInit = document.querySelector('.btn.init')
const btnStatus = document.querySelector('.btn.status')
const catIdle = document.querySelector('.cat__idle')
const catPlay = document.querySelector('.cat__play')

const mainMenu = document.querySelector('.main-menu')
const mainBackground = document.querySelector('.main-background')
const about = document.querySelector('.about-menu')

const heartBar = document.querySelector('.heart-bar')
const background = document.querySelector('.background')
const backgroundIdle = document.querySelector('.background.idle')

const petInfo = document.querySelector('.pet-info')
let petInfoHeart = document.querySelector('.pet-info__heart')
let petInputName = document.querySelector('.pet-input__name')
let petInfoName = document.querySelector('.pet-info__name')

var pet = {
    name: '',
    age: 0,
    heart: 75,
    songs: [],
    isPlaying: false
}

startTime();

btnInit.addEventListener('click', function() {
  if(petInputName.value.trim()!=="") {
    pet.name=petInputName.value
    petInfoName.innerHTML = pet.name
    init();
    startFatique();
  }else{
    alert("Isi nama peliharaan kamu")
  }
})

btnAbout.addEventListener('click', function() {
  openAbout();
})

btnCloseAbout.addEventListener('click', function() {
  closeAbout();
})

btnPlay.addEventListener('click', function() {
  catIdle.classList.add('hide')
  catPlay.classList.remove('hide')
  playToDisco()
})

btnStopPlay.addEventListener('click', function() {
  catIdle.classList.remove('hide')
  catPlay.classList.add('hide')
  backToHome()
})

btnStatus.addEventListener('click', function() {
  petInfo.classList.remove('hide')
})

btnEat.addEventListener('click', function() {
  eat(2);
})

var eat = function (fatique) {
  pet.heart=pet.heart+fatique
  return pet.heart>=100 ? heartBar.innerHTML = 100 : heartBar.innerHTML = pet.heart
}

function startFatique(){
  if(Number(heartBar.textContent) === 0 && pet.isPlaying === true) alert("Mati ")
  pet.heart--
  heartBar.innerHTML = pet.heart
  petInfoHeart.innerHTML = pet.heart
  var f = setTimeout(startFatique, 2500);
};

function countAge() {
  pet.heart--
  heartBar.innerHTML = pet.heart
  var age = setTimeout(countAge, 500);
}

function init() {
  mainMenu.classList.add('hide')
  mainBackground.classList.add('blur')
  backgroundIdle.classList.remove('hide')
  heartBar.innerHTML = pet.heart
  pet.isPlaying = true
};

var playToDisco = function () {
  background.classList.add('play')
  background.classList.remove('idle')
}

var backToHome = function () {
  background.classList.remove('play')
  background.classList.add('idle')
}

function openAbout() {
  mainMenu.classList.add('hide')
  about.classList.remove('hide')
}

function closeAbout() {
  mainMenu.classList.remove('hide')
  about.classList.add('hide')
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
