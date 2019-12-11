// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyC6X9UJxHgsItT46fkeYHrBVF4OdyZCseI',
    authDomain: 'sportnew-1745e.firebaseapp.com',
    projectId: 'sportnew-1745e'
  });
  
var db = firebase.firestore();

var firebaseConfig = {
    apiKey: "AIzaSyC6X9UJxHgsItT46fkeYHrBVF4OdyZCseI",
    authDomain: "sportnew-1745e.firebaseapp.com",
    databaseURL: "https://sportnew-1745e.firebaseio.com",
    projectId: "sportnew-1745e",
    storageBucket: "sportnew-1745e.appspot.com",
    messagingSenderId: "368775563030",
    appId: "1:368775563030:web:4976819b7967f6ef0cf237"
  };

  function ingresarDatos(){

    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
  }