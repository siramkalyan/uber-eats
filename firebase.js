// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJTihH8JkI-znX0vaytX7CdYR8u6JNEMQ",
  authDomain: "uber-eats-clone-eaa56.firebaseapp.com",
  projectId: "uber-eats-clone-eaa56",
  storageBucket: "uber-eats-clone-eaa56.appspot.com",
  messagingSenderId: "958443395901",
  appId: "1:958443395901:web:f07248095ca24e32a38354"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;