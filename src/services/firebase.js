import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";

// Config from legacy index.html
const firebaseConfig = {
    apiKey: "AIzaSyD6xIyfTmIlDz-_nwFw_uAkitQuTsvsKSk",
    authDomain: "novena-col.firebaseapp.com",
    projectId: "novena-col",
    storageBucket: "novena-col.firebasestorage.app",
    messagingSenderId: "444775714094",
    appId: "1:444775714094:web:d201d04cf29d072a5ffebf",
    measurementId: "G-LWRXMJN98Q",
    databaseURL: "https://novena-col-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getDatabase(app);
// const analytics = getAnalytics(app);

export { db };
