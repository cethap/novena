
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD6xIyfTmIlDz-_nwFw_uAkitQuTsvsKSk",
    authDomain: "novena-col.firebaseapp.com",
    projectId: "novena-col",
    storageBucket: "novena-col.firebasestorage.app",
    messagingSenderId: "444775714094",
    appId: "1:444775714094:web:d201d04cf29d072a5ffebf",
    measurementId: "G-LWRXMJN98Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
