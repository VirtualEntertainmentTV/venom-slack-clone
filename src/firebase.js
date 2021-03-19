import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "venom-472a5.firebaseapp.com",
  projectId: "venom-472a5",
  storageBucket: "venom-472a5.appspot.com",
  messagingSenderId: "1040984769254",
  appId: "1:1040984769254:web:4777bb33795058a6ecb127"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
