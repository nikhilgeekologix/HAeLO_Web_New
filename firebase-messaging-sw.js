importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAqN21dVimYNu88mpdK2xcoY23s6qPai1g",
  authDomain: "rajasthan-high-court.firebaseapp.com",
  projectId: "rajasthan-high-court",
  storageBucket: "rajasthan-high-court.firebasestorage.app",
  messagingSenderId: "999104674185",
  appId: "1:999104674185:web:d7b5d2e39d2d23c6b18958",
  measurementId: "G-PVGJ89ZMFJ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
firebase.messaging();