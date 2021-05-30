let accordion = document.getElementsByClassName("accordion");
let i;

for (var i = 0; i < accordion.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('toggle');
 
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      // accordion is currently open, so close it
      answer.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  }
}