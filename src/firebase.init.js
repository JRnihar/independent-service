
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8VfodF_Kvo0OVaWm0lWgTu5YeMLCvTs0",
    authDomain: "photographer-services.firebaseapp.com",
    projectId: "photographer-services",
    storageBucket: "photographer-services.appspot.com",
    messagingSenderId: "705548997748",
    appId: "1:705548997748:web:bc4ec9652345efbad8ed21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth