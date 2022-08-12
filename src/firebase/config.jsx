import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJTBCAeAEEqf1J2BYi7h3jGAchTqvq3Bk",
  authDomain: "ecommerce-coderhouse-rea-e6c50.firebaseapp.com",
  projectId: "ecommerce-coderhouse-rea-e6c50",
  storageBucket: "ecommerce-coderhouse-rea-e6c50.appspot.com",
  messagingSenderId: "503127312774",
  appId: "1:503127312774:web:4655f969e4349444934407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


