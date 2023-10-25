localStorage.setItem("user_name", user_name);
localStorage.setItem("add_room", add_room);

const firebaseConfig = {
    apiKey: "AIzaSyDx9nX29Zum8KtF7B-_k_muUxFI6QzfOTw",
    authDomain: "kwitterdatabase-b6707.firebaseapp.com",
    databaseURL: "https://kwitterdatabase-b6707-default-rtdb.firebaseio.com",
    projectId: "kwitterdatabase-b6707",
    storageBucket: "kwitterdatabase-b6707.appspot.com",
    messagingSenderId: "228021920758",
    appId: "1:228021920758:web:6e711632cb84b8f7b95dd7"
  };
  
var firebase = firebase.initializeApp(firebaseConfig);

document.getElementById("add_user", add_user).value;
document.getElementById(firebaseConfig).value;

function logout()
{
  window.location("index.html");
  localStorage.getItem("add_user", user_name);
}

function addRoom()
{
  localStorage.getItem("add_room", add_room);
  document.getElementById(firebaseConfig).value;
  window.location("kwitter_page.html")
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"

});});}
getData();

function redirectToRoomName()
{
  localStorage.setItem("Room_name", Room_names);
  window.location("kwitter_page.html");
}

function logout()
{
  window.location("kwitter_page.html");
  localStorage.removeItem("user_name", user_name);
  user_name = "<button class='logout' onclick='logout()'";
  console.log("clicked on logout button - ")
  updated_messages = Number(messages) + 1;
}

function send()
{
  send_button = "<button class='send_button' onclick='sendButton()'"
  document.getElementById("inputBox").innerHTML = "";

  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
}