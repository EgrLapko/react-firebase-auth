import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcDXAUezEmG8T5o1G3CRRk8z-KrlEadV8",
    authDomain: "auth-unsplash-api.firebaseapp.com",
    databaseURL: "https://auth-unsplash-api.firebaseio.com",
    projectId: "auth-unsplash-api",
    storageBucket: "auth-unsplash-api.appspot.com",
    messagingSenderId: "612560002322",
    appId: "1:612560002322:web:5a0bf06d46e500e5b267cb",
    measurementId: "G-CKN1FSQSQD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;