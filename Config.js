import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js"
);
export const firebaseConfig = {
  apiKey: "AIzaSyCtSizAvph6wCHNOKdY7SvTXwcXqcH2qfU",
  authDomain: "firescue-updated.firebaseapp.com",
  projectId: "firescue-updated",
  storageBucket: "firescue-updated.appspot.com",
  messagingSenderId: "1018739228258",
  appId: "1:1018739228258:web:c4de177e9e4dff2e3a1b3b",
};

export const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
// firebase.firestore();
// export default firebase;
