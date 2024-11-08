// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjtO_-QzhEP069wQCbK5dsBZiEGNnEwhk",
  authDomain: "luciana-farina-web.firebaseapp.com",
  projectId: "luciana-farina-web",
  storageBucket: "luciana-farina-web.appspot.com",
  messagingSenderId: "424027036300",
  appId: "1:424027036300:web:d07bf22a63b5fef44079a9",
  measurementId: "G-XEHXZF28KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);