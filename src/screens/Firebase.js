import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCYhm-2niKm7Gy1H0P8uNWnkUInLPXkkFI",
          authDomain: "sam2022-group6.firebaseapp.com",
          databaseURL: "https://sam2022-group6-default-rtdb.firebaseio.com",
          projectId: "sam2022-group6",
          storageBucket: "sam2022-group6.appspot.com",
          messagingSenderId: "636980143944",
          appId: "1:636980143944:web:8da8791e3b8fe3fc77f57d"
  
};
firebase.initializeApp(config);
export default firebase;