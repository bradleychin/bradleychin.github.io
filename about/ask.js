var answerArray =  new Array ("Please choose a question", "26", "July 13, 1990", "HTML, CSS, PHP, javascript and C++", "Edmonton, Alberta, Canada", "I am a web developer and entrepreneur", "Laska", "To do good in a meaningful way - to help create a rich and happy life for people. Myself included", "Exploring new things and ideas by reading, travelling and listening to other people's stories", "Honest intentions and unshakable integrity", "I don't think it makes sense that the economy is suffering when we are one of the most educated generations yet. I believe it is our duty to do something about it, and not depend on big cooperations to provide for us. I belive we need to take the steps to create and plant the seeds for the future. I believe the potential of technology of the internet is still untapped, and its' potential is on a global scale. So I became a developer to learn and enable myself to take action and create a path for me to accomplish my goals.", "Hard work, dedication, perserverance, good people and a little luck", "Anything, it's always fun when you're in good company", "Reading, writing, coding, investing, snowboarding and mixing");

function getAnswer() {
  var setNumber = document.getElementById('question').value;
  var answerBox = document.getElementById('answer');

  answerBox.innerHTML = "<h4>"+ answerArray[setNumber]+"</h4>";
}
