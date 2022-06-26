const firebaseConfig = {
  apiKey: "AIzaSyA3WjjHk5fn8fxmQ7Zp85tV7L34mRr8dBc",
  authDomain: "esp32-webserver-23dc5.firebaseapp.com",
  databaseURL: "https://esp32-webserver-23dc5-default-rtdb.firebaseio.com",
  projectId: "esp32-webserver-23dc5",
  storageBucket: "esp32-webserver-23dc5.appspot.com",
  messagingSenderId: "184057476053",
  appId: "1:184057476053:web:cb7d8cd87a58dfdcdec35c",
  measurementId: "G-TY59L3QHZF"
};
// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Make auth and database references
const auth = firebase.auth();
const db = firebase.database();