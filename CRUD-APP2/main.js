function getData() {
  console.log("getData is Called");
  var obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    userName: document.getElementById("userName").value,
    password: document.getElementById("password").value,
    company: document.getElementById("company").value,
    country: document.getElementById("country").value,
    time: document.getElementById("time").value
  };
  sendData(obj);
}

function sendData(obj) {
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function() {
    if (sendInfo.readyState == 4 && sendInfo.status == 201) {
      console.log("user added");
      getlatest();
    }
  };
  sendInfo.open("POST", "http://localhost:3000/users");
  sendInfo.setRequestHeader("Content-type", "application/json");
  sendInfo.send(JSON.stringify(obj));
}

function getlatest() {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      console.log(getInfo.response);
    }
  };
  getInfo.open("GET", "http://localhost:3000/users");
  getInfo.send();
}
