import firebase   from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAIjHXz4oRJ2kRulEWzO0KQnC0vK72olLI",
  authDomain: "signal-clone-yt-build-1cc00.firebaseapp.com",
  projectId: "signal-clone-yt-build-1cc00",
  storageBucket: "signal-clone-yt-build-1cc00.appspot.com",
  messagingSenderId: "965052947129",
  appId: "1:965052947129:web:c0cc3161acbb3d21089968"
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };

