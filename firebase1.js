import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAhSTm3146Mex3ftzgDdRhZkMkjm8E5uNQ",
  authDomain: "trip-planner-c31ec.firebaseapp.com",
  projectId: "trip-planner-c31ec",
  storageBucket: "trip-planner-c31ec.appspot.com",
  messagingSenderId: "567958052359",
  appId: "1:567958052359:web:1bd8500e28d7c68c9114a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
