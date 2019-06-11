import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBgzd5kHDHN_rh4bwEziK8ztnfftWag7-s",
    authDomain: "forum-54489.firebaseapp.com",
    databaseURL: "https://forum-54489.firebaseio.com",
    projectId: "forum-54489",
    storageBucket: "forum-54489.appspot.com",
    messagingSenderId: "204131597351"
};

var Firebase = firebase.initializeApp(config);
export default Firebase;