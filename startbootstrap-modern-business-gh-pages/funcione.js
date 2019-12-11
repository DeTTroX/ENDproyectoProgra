// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyC6X9UJxHgsItT46fkeYHrBVF4OdyZCseI',
    authDomain: 'sportnew-1745e.firebaseapp.com',
    projectId: 'sportnew-1745e'
  });
  
var db = firebase.firestore();

  function ingresarDatos(){

    var nomb = document.getElementById("name").value;
    var telefono = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var mensage = document.getElementById("message").value;

    db.collection("consultas").add({
        Nombre: nomb,
        Telefono: telefono,
        Email: email,
        Mensage: mensage
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
    alert("datos enviados con exito")
  }