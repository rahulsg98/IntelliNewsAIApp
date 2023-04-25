import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCJuvPXUZXW4bERv2dN5vPTQrS2f8T8QxI",
  authDomain: "alanai-news-app.firebaseapp.com",
  projectId: "alanai-news-app",
  storageBucket: "alanai-news-app.appspot.com",
  messagingSenderId: "192968955056",
  appId: "1:192968955056:web:048fcf60ce9511fe39d775",
  measurementId: "G-NQ2T0NVGXS"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {auth, googleAuthProvider, facebookAuthProvider};