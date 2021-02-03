// firebase.utils.js
import firebase from 'firebase/app';
import 'firebase/auth';
const lawyerApp = firebase.initializeApp(JSON.parse(process.env.REACT_APP_LAWYER),'lawyer')
const lawyerauth = lawyerApp.auth()
const lawyerprovider = new firebase.auth.GoogleAuthProvider();
lawyerprovider.setCustomParameters({ prompt: 'select_account' });
export{lawyerauth,lawyerprovider}
export default lawyerApp