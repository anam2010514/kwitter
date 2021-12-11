// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDQoxAa4lDOqEeOxxEte8tgBduWIKSCoY0",
    authDomain: "kwitter2-c1e57.firebaseapp.com",
    projectId: "kwitter2-c1e57",
    storageBucket: "kwitter2-c1e57.appspot.com",
    messagingSenderId: "302829884721",
    appId: "1:302829884721:web:4229423de0e5a8cca64c10"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("welcome").innerHTML = "Welcome: " + user_name+"!";

function adding_room() {
    room_name = document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
});
localStorage.setItem("adding_room", room_name);
window.location = "Kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    Room_names = childKey; 
console.log("Room Name - " + Room_names)
row= "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
}); }); }
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location + "Kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("adding_room");
    window.location = "Kwitter.html";
}