// const nodemailer = require("nodemailer");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwlaCrpWOuWius26Xcrnk5cQfwVl6RVhE",
  authDomain: "contactform-7e4b1.firebaseapp.com",
  databaseURL: "https://contactform-7e4b1.firebaseio.com",
  projectId: "contactform-7e4b1",
  storageBucket: "",
  messagingSenderId: "995461833612",
  appId: "1:995461833612:web:95ce99fce0a423aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Refference messeges collection
var messagesRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementById("frmDataEntry").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputval("name");
  var email = getInputval("email");
  var message = getInputval("message");

  //save message
  saveMessage(name, email, message);
  document.getElementById("frmDataEntry").reset();
}

//function to get form values
function getInputval(id) {
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message) {
  var newMessageref = messagesRef.push();
  newMessageref.set({
    name: name,
    email: email,
    message: message
  });
}

function recaptcha_callback() {
  let submit = document.getElementById("submit");
  submit.classList.remove("invisible");
}
