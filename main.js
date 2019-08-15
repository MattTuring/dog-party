



function nameDog() {
  document.getElementById('dog').innerHTML = document.getElementById('jsDogInput').value;
  if (document.getElementById('jsDogInput').value != "") {
    document.getElementById('jsDogInput').value = ""
  }
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
  document.getElementById('jsTipThree').classList.remove('how');
}

function dogInfoText() {

  var dogInfo = document.getElementById('jsDogInfo');
  var dogSelectValue = dogInfo.options[dogInfo.selectedIndex].value;

  if (dogSelectValue == "how") {
    document.getElementById('text1').innerHTML  = document.getElementById('jsDogTextInput').value
  } else if ( dogSelectValue == "what" ){
    document.getElementById('text2').innerHTML  = document.getElementById('jsDogTextInput').value
  } else if ( dogSelectValue == "fact") {
    document.getElementById('text3').innerHTML  = document.getElementById('jsDogTextInput').value
  } else {
    console.log("not selected")
  }
}
