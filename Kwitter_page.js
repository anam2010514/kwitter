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
  
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("adding_room");
    window.location = "Kwitter.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey; 
     message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name= message_data['name'];
    message= message_data['message'];
    like= message_data['like'];
    name_with_tag= "<h4> "+ name +"<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegdlz01dFqGxsOdVanuGC7smufpTekW18GQ&usqp=CAU' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button +span_with_tag;
document.getElementById("output").innerHTML+= row;
} }); }); } getData();

function updateLike(message_id){
    console.log("clicked on liked button - " + message_id);
    button_id = message_id;
    likes= document.getElementById(button_id).value;
    updated_likes= Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
    });

}
