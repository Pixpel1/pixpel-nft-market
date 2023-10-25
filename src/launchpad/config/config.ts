// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuNPdaHj1fitP_XO-r_CB2Tnqp_gd86qo",
    authDomain: "pixpel-95355.firebaseapp.com",
    projectId: "pixpel-95355",
    storageBucket: "pixpel-95355.appspot.com",
    messagingSenderId: "19876655796",
    appId: "1:19876655796:web:35ccc3c7903568b5689de1",
    measurementId: "G-3D55VE1FF8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
