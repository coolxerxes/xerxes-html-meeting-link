const { initializeApp } =  require("firebase/app");
const { getDatabase } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyApFC-a5J2HrscGwknE0uNgw_IsdHRau8s",
  authDomain: "connect-cbff7.firebaseapp.com",
  projectId: "connect-cbff7",
  storageBucket: "connect-cbff7.appspot.com",
  messagingSenderId: "569977222717",
  appId: "1:569977222717:web:fdd68f27ffd68619c4dc54",
  measurementId: "G-3MQ5RKTNES"
};

const app = initializeApp(firebaseConfig);
var database = getDatabase(app);

module.exports = database