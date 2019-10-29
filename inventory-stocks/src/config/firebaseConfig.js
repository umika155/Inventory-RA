import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
  const fbConfig = {
    apiKey: "AIzaSyBwUUrGpt_ykY8jAQmQH2EkgfPBjjwC2CU",
    authDomain: "inventorysystem-19cf7.firebaseapp.com",
    databaseURL: "https://inventorysystem-19cf7.firebaseio.com",
    projectId: "inventorysystem-19cf7",
    storageBucket: "inventorysystem-19cf7.appspot.com",
    messagingSenderId: "534097449841",
    appId: "1:534097449841:web:9e826aaecf01a5e5c6dcd0",
    measurementId: "G-00Q0KVMRS9"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);

  export default firebase;