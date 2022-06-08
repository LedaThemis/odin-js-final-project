// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

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
const auth = getAuth(app)

const signIn = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export { auth, signIn };
