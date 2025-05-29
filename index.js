// Code your solutions in this file

function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

function writeMessages(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// function to count down from a given number
function countDown(start) {
  while (start >= 0) {
    console.log(start);
    start--;
  }
}

// Test the functions
console.log(writeCards(["Guadalupe", "Ollie", "Aki", "Maya", "Sam"], "birthday"));
console.log(writeMessages(writeCards, "birthday"));
countDown(10);


