// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUoAr_BAOXSrxflkKjUE7hnvMUoBIcuQo",
//   authDomain: "react-ts-app-dcb92.firebaseapp.com",
//   projectId: "react-ts-app-dcb92",
//   storageBucket: "react-ts-app-dcb92.firebasestorage.app",
//   messagingSenderId: "254591268973",
//   appId: "1:254591268973:web:5fe5a60f8217338a112764"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
