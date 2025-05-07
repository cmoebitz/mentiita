/* Firebase-Konfiguration – <DEINE WERTE EINFÜGEN> */
const firebaseConfig = {
  apiKey: "AIzaSyCiRFm8mIU_E9rlMhuqk6_VsfSOdcp5rGE",
  authDomain: "mentiita-852d6.firebaseapp.com",
  databaseURL: "https://mentiita-852d6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mentiita-852d6",
  storageBucket: "mentiita-852d6.firebasestorage.app",
  messagingSenderId: "422613607855",
  appId: "1:422613607855:web:b2fa335b53403f6eadbb5a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
