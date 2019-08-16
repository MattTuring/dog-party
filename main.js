
var dogName = document.getElementById('jsNameDog');

dogName.addEventListener('click', function nameDog() {
  document.getElementById('dog').innerHTML = document.getElementById('jsDogInput').value;
  if (document.getElementById('jsDogInput').value != "") {
    document.getElementById('jsDogInput').value = ""
  }
})

var hideOne = document.getElementById('jsHideTextOne');

hideOne.addEventListener('click', function hideTextOne() {
  document.getElementById('text1').classList.toggle('hide')
})

var hideTwo = document.getElementById('jsHideTextTwo');

hideTwo.addEventListener('click', function hideTextTwo() {
  document.getElementById('text2').classList.toggle('hide')
})

var hideThree = document.getElementById('jsHideTextThree');

hideThree.addEventListener('click',function hideTextThree() {
  document.getElementById('text3').classList.toggle('hide')
})



var how = document.getElementById('jsHow');


how.addEventListener('mouseover', function tipOne() {
  document.getElementById('jsTipOne').classList.add('how');
  document.getElementById('jsTipOne').classList.remove('no-how');
});


how.addEventListener('mouseout', function noTipOne() {
  document.getElementById('jsTipOne').classList.add('no-how');
  document.getElementById('jsTipOne').classList.remove('how');
});


var what = document.getElementById('jsWhat');

what.addEventListener('mouseover', function tipTwo() {
  document.getElementById('jsTipTwo').classList.add('how');
  document.getElementById('jsTipTwo').classList.remove('no-how');
})

what.addEventListener('mouseout',function noTipTwo() {
  document.getElementById('jsTipTwo').classList.add('no-how');
  document.getElementById('jsTipTwo').classList.remove('how')
})

var fact = document.getElementById('jsFact');

fact.addEventListener('mouseover',function tipThree() {
  document.getElementById('jsTipThree').classList.add('how');
  document.getElementById('jsTipThree').classList.remove('no-how');
})

fact.addEventListener('mouseout', function noTipThree() {
  document.getElementById('jsTipThree').classList.add('no-how');
  document.getElementById('jsTipThree').classList.remove('how');
})

var jsDogInfoButton = document.getElementById('jsDogInfoButton');

jsDogInfoButton.addEventListener('click', function dogInfoText() {

  var dogInfo = document.getElementById('jsDogInfo');
  var dogSelectValue = dogInfo.options[dogInfo.selectedIndex].value;

  if (dogSelectValue == 'how') {
    document.getElementById('text1').innerHTML  = document.getElementById('jsDogTextInput').value
  } else if ( dogSelectValue == "what" ){
    document.getElementById('text2').innerHTML  = document.getElementById('jsDogTextInput').value
  } else if ( dogSelectValue == "fact") {
    document.getElementById('text3').innerHTML  = document.getElementById('jsDogTextInput').value
  } else {
    console.log('not selected')
  }
})
