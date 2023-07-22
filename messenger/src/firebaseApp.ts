// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnx5k8h8TXoR89e_pP9zw6SghzW66urX8',
  authDomain: 'messenger-3e290.firebaseapp.com',
  projectId: 'messenger-3e290',
  storageBucket: 'messenger-3e290.appspot.com',
  messagingSenderId: '817173238463',
  appId: '1:817173238463:web:3b38e90644e5a1eb29ec0a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
