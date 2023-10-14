// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'estate-mern-5c362.firebaseapp.com',
  projectId: 'estate-mern-5c362',
  storageBucket: 'estate-mern-5c362.appspot.com',
  messagingSenderId: '323460398838',
  appId: '1:323460398838:web:07b2c136b680cc91e7b6d7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//
