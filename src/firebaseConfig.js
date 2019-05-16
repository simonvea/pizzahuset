import Firebase from "firebase"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhwiZ7AkC1CLD7gROwdRkZPCk_x1-esD4",
    authDomain: "pizza-planet-aa080.firebaseapp.com",
    databaseURL: "https://pizza-planet-aa080.firebaseio.com",
    projectId: "pizza-planet-aa080",
    storageBucket: "pizza-planet-aa080.appspot.com",
    messagingSenderId: "830230292544",
    appId: "1:830230292544:web:111d66877261336f"
  };
  // Initialize Firebase
const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref("menu");
export const dbOrdersRef = db.ref("orders");