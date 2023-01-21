function logout() {
    window.location = "index.html";
}
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
room_name = localStorage.getItem("room_name");


function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
      
        });
        document.getElementById("msg").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];

  name_with_tag = "<h4> "+name+" :"+message+" </h4>";
row=name_with_tag+"<hr>";
    document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();