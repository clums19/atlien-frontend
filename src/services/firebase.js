import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDAAJRTWwxXLZsvvnb9VEqAUXGXTRgvHPc",
    authDomain: "atlien-bf081.firebaseapp.com",
    projectId: "atlien-bf081",
    storageBucket: "atlien-bf081.appspot.com",
    messagingSenderId: "843747324323",
    appId: "1:843747324323:web:d3ffc23f30955a695aaa16"
  };

firebase.initializeApp(firebaseConfig);

// TODO: Set up provider for Google Signin

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// TODO: Define login and logout functionality


function login() {
    return auth.signInWithPopup(provider);
}
function logout() {
    return auth.signOut();
}

  // Export functionality
  export {
      login,
      logout,
      auth
  }