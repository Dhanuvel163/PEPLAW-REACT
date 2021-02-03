// firebase.utils.js
import firebase from 'firebase/app';
import 'firebase/auth';
const app = firebase.initializeApp(JSON.parse(process.env.REACT_APP_SECRET_CODE));
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app