const responses = [
  "I Love you more...😘",
  "I miss youuuu...🥺",
  "Aww, that's such a sweet question 😘",
  "I was waiting for you to ask me that 😍",
  "You always know what to say 💕",
  "You're making me blush 😳",
  "Hmm... I like where this is going 😉",
  "Let’s talk about that over coffee ☕",
  "I’d love to answer... only if you smile first 😊",
  "You’re so cute when you're curious 🥰",
  "Well, you already know what I’d say 😏",
  "I'll answer if you promise to text me again soon 💬"
];

function generateResponse() {
  const question = document.getElementById("questionInput").value.trim();
  const showQuestion = document.getElementById("showQuestion");
  const responseText = document.getElementById("response");

  if (question === "") {
    responseText.textContent = "Ask me something first! 😅";
    showQuestion.textContent = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * responses.length);
  responseText.textContent = responses[randomIndex];
  showQuestion.textContent = `"${question}"`;
}

const inputBox = document.getElementById("questionInput");

inputBox.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    this.style.backgroundColor = "pink"; // light green background
  } else {
    this.style.backgroundColor = "white"; // revert to white
  }
});
