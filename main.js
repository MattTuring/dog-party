

var dogName = document.getElementsByClassName('bold')

function nameDog() {
var dogValue = document.getElementById('jsDogInput').value;
dogName.innerHTML = dogValue;
  console.log("works")
}

function hideTextOne() {
  document.getElementById('text1').classList.toggle('hide')
}

function hideTextTwo() {
  document.getElementById('text2').classList.toggle('hide')
}

function hideTextThree() {
  document.getElementById('text3').classList.toggle('hide')
}

function tipOne() {
document.getElementById('jsTipOne').classList.add('how');
document.getElementById('jsTipOne').classList.remove('no-how');
}

function noTipOne() {
document.getElementById('jsTipOne').classList.add('no-how');
document.getElementById('jsTipOne').classList.remove('how')
}

function tipTwo() {
document.getElementById('jsTipTwo').classList.add('how');
document.getElementById('jsTipTwo').classList.remove('no-how');
}

function noTipTwo() {
document.getElementById('jsTipTwo').classList.add('no-how');
document.getElementById('jsTipTwo').classList.remove('how')
}

function tipThree() {
document.getElementById('jsTipThree').classList.add('how');
document.getElementById('jsTipThree').classList.remove('no-how');
}

function noTipThree() {
document.getElementById('jsTipThree').classList.add('no-how');
document.getElementById('jsTipThree').classList.remove('how')
}
