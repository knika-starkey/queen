let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

value = shuffle(values);
alert(value);
function play(values) {
  let turn = 0;
  let card;
  while (values.length > 0) {
    turn++;
    if (turn % 2 == 1) {
      alert("You pick card!");
      card = values.pop();
      alert(card);
    } else {
      alert("I pick card");
      card = values.pop();
      alert(card);
    }
    if (card == "Q") {
      turn % 2 == 0 ? alert("I WIN!") : alert("YOU WIN");
      return;
    }
  }
}

play(values);
