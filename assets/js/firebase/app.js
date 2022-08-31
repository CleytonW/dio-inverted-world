
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDkxZ5Nv1SHe_6PjNdBNnOeu7zdiVp3COs",
    authDomain: "projeto-teste-af26b.firebaseapp.com",
    projectId: "projeto-teste-af26b",
    storageBucket: "projeto-teste-af26b.appspot.com",
    messagingSenderId: "182817560364",
    appId: "1:182817560364:web:25ded786c362a09682fe89",
    measurementId: "G-C0K052PXQ3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
