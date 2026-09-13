import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCC7PCS8THdg5GKPqKl-w3FiB898NGal3s",
    authDomain: "scade-website.firebaseapp.com",
    projectId: "scade-website",
    storageBucket: "scade-website.appspot.com",
    messagingSenderId: "528561962338",
    appId: "1:528561962338:web:317afbc9c42463f458803b",
    measurementId: "G-4D3K51P8E3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  // Check for authenticated user
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User session active:", user.email);
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      console.log("No active user session.");
      sessionStorage.removeItem("user");
      // Only redirect if explicitly on a restricted admin page
      if (window.location.pathname.includes('/admin/')) {
        window.location.href = '../login.html';
      }
    }
  });

