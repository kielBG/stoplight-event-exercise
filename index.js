(function() {
  'use strict';

  // YOUR CODE HERE
  //create buttons
  const stopButton = document.getElementById("stopButton");
  const slowButton = document.getElementById("slowButton");
  const goButton = document.getElementById("goButton");

  const stopLight = document.getElementById("stopLight");
  const slowLight = document.getElementById("slowLight");
  const goLight = document.getElementById("goLight"); 

//create event listeners to change colors when clicked

  stopButton.addEventListener("click", function() {
    stopLight.classList.toggle('stop');
  });

  slowButton.addEventListener("click", function() {
    slowLight.classList.toggle('slow');
  });

  goButton.addEventListener("click", function() {
    goLight.classList.toggle('go');
  });

const button = document.getElementsByClassName("button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseenter", function() {
    console.log(`Entered ${event.target.textContent} button`);
  })
  button[i].addEventListener("mouseleave", function() {
    console.log(`Left ${event.target.textContent}`);
  })
}


})();
