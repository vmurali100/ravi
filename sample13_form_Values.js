var users = [];
function getData() {
  var user = {
    fname: "",
    lname: "",
    email: "",
    gender: "",
    roles:[]
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

  // for Checkboxes

  var cboxes = document.getElementsByName("role");
  var cboxValue = [];
  for (i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked) {
      cboxValue.push(cboxes[i].value);
    }
  }
  user.roles = cboxValue;


  console.log(user)
  user.id=null
  postDataToServer(user)
  //Adding the Object to Array
  // users.push(user);

  //Calling function to display Latest Values
  // displayUsers();
  // clearForm(user);
}

function clearForm(obj) {
  for (a in obj) {
    if(a !="roles" && a != "gender" &&  a != "id"){
      document.getElementById(a).value = "";
    }else if(a == "roles"){
      var rolevalues = document.getElementsByName("role");
      for(i=0;i<rolevalues.length;i++){
        rolevalues[i].checked = false
      }
    }
    else if(a == "gender"){
      var rbuttons = document.getElementsByName("gender");
      for(i=0;i<rbuttons.length;i++){
        rbuttons[i].checked = false
      }
    }
  }
}
function displayUsers() {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < users.length; i++) {
    var myTr_ = document.createElement("tr");
    // myTr_.setAttribute("onclick","editUser("+i+")")
    for (a in users[i]) {

      //Capture all the values except roles
      if (a != "roles") {
        var myTd = document.createElement("td");
        myTd.innerHTML = users[i][a];
        myTr_.appendChild(myTd);
      }else{
 
        var rolesTd = document.createElement("td")
        var results =""
        var arrtoLoop = users[i][a]
        for(j=0;j<arrtoLoop.length;j++){
          results+=arrtoLoop[j]+"<br>"
        }
        rolesTd.innerHTML = results
        myTr_.appendChild(rolesTd)
      }

    }

    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick","editUser("+i+")")
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick","deleteUser("+i+")")
    editTd.appendChild(editBtn);
    myTr_.appendChild(editTd);

    deleteTd.appendChild(deleteBtn);
    myTr_.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr_);
  }
}


function editUser(i){
  index=i;
  clearForm(users[i])
  // console.log(users[i])
  for(a in users[i]){
    if(a != "gender" && a!= "roles" && a != "id"){
      document.getElementById(a).value = users[i][a]
    }else if(a == "gender"){
      var rbuttons = document.getElementsByName("gender");
      for(j=0;j<rbuttons.length;j++){
        if(rbuttons[j].value == users[i][a]){
          rbuttons[j].checked = true
        }
      }
    
    }else if(a == "roles"){
      var rolevalues = document.getElementsByName("role");
      var serverValue = users[i][a]
      for(i=0;i<rolevalues.length;i++){
        for(j=0;j<serverValue.length;j++){
          if(rolevalues[i].value == serverValue[j]){
            rolevalues[i].checked = true
          }
        }
      }      
    }
  }
}

function deleteUser(i){
  var sendData = new XMLHttpRequest;
  sendData.onreadystatechange = function (){
    if(sendData.readyState  == 4 && sendData.status == 200){
      console.log("User added")
      getDatafromServer()
    }
  }
  sendData.open("DELETE","http://localhost:3000/users/"+users[i].id)
  sendData.setRequestHeader("Content-type","application/json")
  sendData.send()
 
  displayUsers()
}

function updateUser(){
  var updatedObj={}
  updatedObj.fname = document.getElementById("fname").value;
  updatedObj.lname = document.getElementById("lname").value;
  updatedObj.email = document.getElementById("email").value;

  var rbuttons = document.getElementsByName("gender");
  for (i = 0; i < rbuttons.length; i++) {
    if (rbuttons[i].checked) {
      updatedObj.gender = rbuttons[i].value;
    }
  }
  
  var cboxes = document.getElementsByName("role");
  var cboxValue = [];
  for (i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked) {
      cboxValue.push(cboxes[i].value);
    }
  }
  updatedObj.roles = cboxValue;

  var sendData = new XMLHttpRequest;
  sendData.onreadystatechange = function (){
    if(sendData.readyState  == 4 && sendData.status == 201){
      console.log("User added")
      getDatafromServer()
    }
  }
  sendData.open("PUT","http://localhost:3000/users/"+updatedObj.id)
  sendData.setRequestHeader("Content-type","application/json")
  sendData.send(JSON.stringify(updatedObj))
 
  
  clearForm()

}

function postDataToServer(user){
  var sendData = new XMLHttpRequest;
  sendData.onreadystatechange = function (){
    if(sendData.readyState  == 4 && sendData.status == 201){
      console.log("User added")
      getDatafromServer()
    }
  }
  sendData.open("POST","http://localhost:3000/users")
  sendData.setRequestHeader("Content-type","application/json")
  sendData.send(JSON.stringify(user))
}

function getDatafromServer(){
  var sendData = new XMLHttpRequest;
  sendData.onreadystatechange = function (){
    if(sendData.readyState  == 4 && sendData.status == 200){
      users = JSON.parse(sendData.response)
      console.log(users)
      displayUsers()
    }
  }
  sendData.open("GET","http://localhost:3000/users")
  sendData.send()

}