import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADi-E-8X_xfhPuL3MMnKC8jpN-ftOCRVM",
    authDomain: "fir-auth-57da4.firebaseapp.com",
    projectId: "fir-auth-57da4",
    storageBucket: "fir-auth-57da4.appspot.com",
    messagingSenderId: "1031177241703",
    appId: "1:1031177241703:web:217542a1d5f95c94c300c2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
