import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4okypB9DJA69ituZhxVK73U562fsJKvs",
  authDomain: "chating-c0537.firebaseapp.com",
  projectId: "chating-c0537",
  storageBucket: "chating-c0537.appspot.com",
  messagingSenderId: "631822822537",
  appId: "1:631822822537:web:f5b424300535cf07f26a58",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
