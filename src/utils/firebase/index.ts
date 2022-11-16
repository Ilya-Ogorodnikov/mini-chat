import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from '../constants';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore();

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const createNewMessage = async (user: User, message: string) => {
  await addDoc(collection(firestore, 'messages'), {
    uid: user?.uid,
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    text: message,
    createdAt: serverTimestamp(),
  });
};
