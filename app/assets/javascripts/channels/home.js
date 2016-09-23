// function blink() {
//   console.log('I am in blink() beginning');
//   var element = document.getElementById("blink");
//   var id = setInterval(performBlink(), 25);
//
//   function performBlink() {
//     element.style.background = 'red';
//     clearInterval(id);
//   }
//
//   console.log('I am in blink() ending');
// }

// TODO not browser-dependent
function performBlink(elementId) {
  var element = document.getElementById(elementId);
  var timeout;

  if (element.style.webkitAnimationName !== 'blinkable') {
    element.style.webkitAnimationName = 'blinkable';
    element.style.webkitAnimationDuration = '3s';

    // make sure to reset the name after 4 seconds, otherwise another call to colorchange wont have any effect
    timeout = setTimeout(function() {
      element.style.webkitAnimationName = '';
    }, 3000);
  }

  // For development purpose only
  console.log('I am from performBlink(' + 'elementId' + ')' + '\n' +
    'Element animation name:  ' + element.style.webkitAnimationName);
}
