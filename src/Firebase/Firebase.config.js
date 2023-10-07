// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFcGmEeFie93RWNnlvEjKyKZVpHWv1Wb4",
  authDomain: "assignment9-d2330.firebaseapp.com",
  projectId: "assignment9-d2330",
  storageBucket: "assignment9-d2330.appspot.com",
  messagingSenderId: "489592168737",
  appId: "1:489592168737:web:f8103a2a22d7045f39de60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
 export const auth = getAuth(app);
export default app;