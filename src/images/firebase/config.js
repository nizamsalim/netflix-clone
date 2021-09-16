import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp4H4CzHCi-xw60-bVsV4ZA3fVshxfyZ8",
  authDomain: "fir-5b3b6.firebaseapp.com",
  projectId: "fir-5b3b6",
  storageBucket: "fir-5b3b6.appspot.com",
  messagingSenderId: "550774887330",
  appId: "1:550774887330:web:edf08d5a708e12f66f58fb",
  measurementId: "G-JSXNTFJ1CL"
};

export const Firebase = firebase.initializeApp(firebaseConfig)