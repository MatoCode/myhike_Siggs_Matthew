//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDURjxpB-1oH4Pzlb5y9mWiYJaP5Yfe648",
    authDomain: "comp1800-2022.firebaseapp.com",
    projectId: "comp1800-2022",
    storageBucket: "comp1800-2022.appspot.com",
    messagingSenderId: "802113263961",
    appId: "1:802113263961:web:059f3a32edc60484ea1448"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();