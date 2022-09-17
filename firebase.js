// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtRlR3CUykjxCbu02qyeOiX-f4lj3JLfM",
    authDomain: "webrtc-video-bde1d.firebaseapp.com",
    projectId: "webrtc-video-bde1d",
    storageBucket: "webrtc-video-bde1d.appspot.com",
    messagingSenderId: "1036813658799",
    appId: "1:1036813658799:web:2bcaf909dbb205f5b0425a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
