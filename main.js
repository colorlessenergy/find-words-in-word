var completeWord = [];
var userData;
var data = document.getElementById("data");
var send = document.getElementById("send");
var displayWord = document.getElementById("displayWord");
send.addEventListener("click", function () {
  userData = data.value
  while (userData.length > 0) {
    var matchingElement = words.filter(function (e) {
      return userData.toLowerCase().startsWith(e);
    });
    if (matchingElement[1]) {
      completeWord.push(matchingElement[1]);
      userData = userData.slice(matchingElement[1].length);
    } else {
      completeWord.push(userData[0]);
      userData = userData.slice(1);
    }
    displayWord.innerHTML = completeWord.join(" - ")
  }
  completeWord = [];
  data.value = "";
});

data.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    send.click();
  }
});
