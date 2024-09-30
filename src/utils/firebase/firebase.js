import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARpHYyPichXCBOiJReYeFV5J4imBlD-_4",
  authDomain: "crown-clothing-web-app-e6219.firebaseapp.com",
  projectId: "crown-clothing-web-app-e6219",
  storageBucket: "crown-clothing-web-app-e6219.appspot.com",
  messagingSenderId: "932119102974",
  appId: "1:932119102974:web:acb51288e0a574d888ecaf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists())
}