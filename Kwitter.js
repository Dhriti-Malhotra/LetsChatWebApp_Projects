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
}