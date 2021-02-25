import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCqyTIbmJX85I1WSwoJFKA0qxbT-7Qa344",
  authDomain: "shop-react-ecb3b.firebaseapp.com",
  projectId: "shop-react-ecb3b",
  storageBucket: "shop-react-ecb3b.appspot.com",
  messagingSenderId: "874332870921",
  appId: "1:874332870921:web:6839698b020ed4798f1bd8",
  measurementId: "G-5LKRRC0FNE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
