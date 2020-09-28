import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUItjBFDK0pV7n04Lr1APFkFm0KK4qP-U",
  authDomain: "clone-3f64c.firebaseapp.com",
  databaseURL: "https://clone-3f64c.firebaseio.com",
  projectId: "clone-3f64c",
  storageBucket: "clone-3f64c.appspot.com",
  messagingSenderId: "839579137291",
  appId: "1:839579137291:web:18ded2b31a37d638fb5e0e",
  measurementId: "G-DYYSXLWFFL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
