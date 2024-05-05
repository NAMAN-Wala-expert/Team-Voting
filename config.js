import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
        apiKey: "AIzaSyB_SlJGSvhBhWxcOf7vkBLAu3onRuCZt44",
        authDomain: "project-67-c4a8a.firebaseapp.com",
        projectId: "project-67-c4a8a",
        storageBucket: "project-67-c4a8a.appspot.com",
        messagingSenderId: "187376715605",
        appId: "1:187376715605:web:3c9b1762998ac3aed3d1dc",
        measurementId: "G-QDK6HFW7W7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();