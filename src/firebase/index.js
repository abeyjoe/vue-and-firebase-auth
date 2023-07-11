import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp8PaOSx5nJPk5HFYc-r2VxZQzu2NTiLo",
  authDomain: "vue-fire-auth-yt-f0922.firebaseapp.com",
  projectId: "vue-fire-auth-yt-f0922",
  storageBucket: "vue-fire-auth-yt-f0922.appspot.com",
  messagingSenderId: "298768056661",
  appId: "1:298768056661:web:80fa8ca7cb78b08cd42fdc"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
