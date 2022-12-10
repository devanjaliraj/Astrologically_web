import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZdU55I4pTZADon8q4QDMhRm_WIGy1PvA",
  authDomain: "astroweb-510eb.firebaseapp.com",
  projectId: "astroweb-510eb",
  storageBucket: "astroweb-510eb.appspot.com",
  messagingSenderId: "650267658689",
  appId: "1:650267658689:web:190478da14670c43204740",
  measurementId: "G-40LHH5Y62T",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
