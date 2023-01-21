//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCcjqvhKdb7D97ti06gPpuH91YGEvTckSA",
    authDomain: "chatweb-cccc8.firebaseapp.com",
    databaseURL: "https://chatweb-cccc8-default-rtdb.firebaseio.com",
    projectId: "chatweb-cccc8",
    storageBucket: "chatweb-cccc8.appspot.com",
    messagingSenderId: "516989757654",
    appId: "1:516989757654:web:2ca77a5c156ce01eefc177"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = "<div  class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

            //End code
        });
    });
}
getData();
function redirectToRoomName(name) {
    localStorage.setItem("room_name", name)
    window.location = "index3.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "index3.html";
}