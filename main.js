console.log(words);
alert(words);
var userInput = prompt("what is the word you want to break down!");
var completeWord = [];
while (userInput.length > 0) {
  var matchingElement = words.filter(function (e) {
    return userInput.toLowerCase().startsWith(e);
  });
  var match = matchingElement.sort(function (e) {
    return e;
  })[1];
  console.log(match);
  if (match) {
    completeWord.push(match)
    userInput = userInput.slice(match.length)
  } else {
    completeWord.push(userInput[0]);
    userInput = userInput.slice(1);
  }
  console.log(completeWord);
}
