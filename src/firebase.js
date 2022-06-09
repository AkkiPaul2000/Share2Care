import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDjbLlFXF-Xig_XdvON2MwXXHXAk7frG3g",
  authDomain: "share2care-ca64f.firebaseapp.com",
  projectId: "share2care-ca64f",
  storageBucket: "share2care-ca64f.appspot.com",
  messagingSenderId: "470787340757",
  appId: "1:470787340757:web:88fc7ced1ada1a4870e55c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
