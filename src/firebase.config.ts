import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXBAVtySc1kXJIN73txc_o6nsX0fiTN6w",
  authDomain: "test-ape-client.firebaseapp.com",
  projectId: "test-ape-client",
  storageBucket: "test-ape-client.appspot.com",
  messagingSenderId: "460380796108",
  appId: "1:460380796108:web:449f2c1ebfded10427be69"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
