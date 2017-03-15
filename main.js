console.log(words);
alert(words);
var userInput = prompt("what is the word you want to break down!");
var completeWord = [];
  for (var i = 0; i < words.length; i++) {
    if (userInput.startsWith(words[i])) {
      // store the words that were found
      // delete part of the string were the word was found
      console.log(words[i]);


    }
  }
