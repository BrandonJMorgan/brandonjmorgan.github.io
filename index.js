
var config = {
   apiKey: "AIzaSyC8UDTbEG5bpbGwdPAeuxPKEG8mt1YG7w0",
    authDomain: "contactform-fce78.firebaseapp.com",
    databaseURL: "https://contactform-fce78.firebaseio.com",
    projectId: "contactform-fce78",
    storageBucket: "contactform-fce78.appspot.com",
    messagingSenderId: "313988068172"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.response').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.response').style.display = 'none';
  },4000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}