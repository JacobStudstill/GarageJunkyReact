// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_w_l4ra_jydhcAsJKw3T5LQIaZdvn5nI",
  authDomain: "garagejunkys.firebaseapp.com",
  projectId: "garagejunkys",
  storageBucket: "garagejunkys.appspot.com",
  messagingSenderId: "1047890871236",
  appId: "1:1047890871236:web:a4e0e26ca91c30d72fda91",
  measurementId: "G-QRLF92ML1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default getFirestore();