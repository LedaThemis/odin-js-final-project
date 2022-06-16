// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLiYisKb2xB1-JUyFjNPMWtm_mka1R69M',
  authDomain: 'leda-odin-final-project.firebaseapp.com',
  projectId: 'leda-odin-final-project',
  storageBucket: 'leda-odin-final-project.appspot.com',
  messagingSenderId: '480134735356',
  appId: '1:480134735356:web:9321dbe4a248ff7c823e79',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

const signIn = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

// Firestore
const db = getFirestore(app);

const addTweet = async (author_uid, author_name, author_photoURL, text) => {
  try {
    await addDoc(collection(db, 'tweets'), {
      author_uid,
      author_name,
      author_photoURL,
      text,
      timestamp: Date.now(),
    });
  } catch (e) {
    console.error('Error adding tweet:', e);
  }
};

export { auth, signIn, addTweet };
