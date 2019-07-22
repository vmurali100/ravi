var users = [];
function getData() {
  var user = {
    fname: "",
    lname: "",
    email: "",
    gender: ""
  };
  user.fname = document.getElementById("fname").value;
  user.lname = document.getElementById("lname").value;
  user.email = document.getElementById("email").value;

  var rbuttons = document.getElementsByName("gender");
  for (i = 0; i < rbuttons.length; i++) {
    if (rbuttons[i].checked) {
      user.gender = rbuttons[i].value;
    }
  }

  console.log(user);
  // for Checkboxes

  var cboxes = document.getElementsByName("role");
  var cboxValue = [];
  for (i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked) {
      cboxValue.push(cboxes[i].value);
    }
  }
  user.roles = cboxValue;

  //Adding the Object to Array
  users.push(user);

  //Calling function to display Latest Values
  displayUsers();
  clearForm(user);
}

function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}
function displayUsers() {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < users.length; i++) {
    var myTr_ = document.createElement("tr");
    for (a in users[i]) {
      if (a != "roles") {
        var myTd = document.createElement("td");
        myTd.innerHTML = users[i][a];
        myTr_.appendChild(myTd);
      }
    }

    // var editTd = document.createElement("td");
    // var deleteTd = document.createElement("td");

    // var editBtn = document.createElement("button");
    // editBtn.innerHTML = "Edit";
    // var deleteBtn = document.createElement("button");
    // deleteBtn.innerHTML = "Delete";

    // editTd.appendChild(editBtn);
    // myTr_.appendChild(editTd);

    // deleteTd.appendChild(deleteBtn);
    // myTr_.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr_);
  }
}
