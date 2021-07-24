(function () {

var names = ["sandeep","Jaswa","jayasri","varshitha","jayanth","Ankith","Jamun","Desiree Dulce","Natasha Nice","Jordy"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j' || firstLetter === 'J') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
