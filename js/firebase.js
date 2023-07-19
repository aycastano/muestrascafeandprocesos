
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


  import { getFirestore} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAokysqcvx2PUmBXf9TrLmAs1jW8a4MLPc",
    authDomain: "cafeaandprocesos.firebaseapp.com",
    databaseURL: "https://cafeaandprocesos-default-rtdb.firebaseio.com",
    projectId: "cafeaandprocesos",
    storageBucket: "cafeaandprocesos.appspot.com",
    messagingSenderId: "75291480022",
    appId: "1:75291480022:web:90d6e39cda5d64e91dde77"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




