import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjtO_-QzhEP069wQCbK5dsBZiEGNnEwhk",
  authDomain: "luciana-farina-web.firebaseapp.com",
  projectId: "luciana-farina-web",
  storageBucket: "luciana-farina-web.firebasestorage.app",
  messagingSenderId: "424027036300",
  appId: "1:424027036300:web:d07bf22a63b5fef44079a9",
  measurementId: "G-XEHXZF28KR" 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
