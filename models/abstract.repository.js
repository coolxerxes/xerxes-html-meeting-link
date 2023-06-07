const firebaseAdmin = require('firebase-admin');

class AbstractRepository {
  collection = null;
  bucket = null;
  app = null;

  constructor(collection) {
    this.app = firebaseAdmin
      .initializeApp(
        {
          credential: firebaseAdmin.credential.cert({
            projectId: process.env.PROJECT_ID,
            privateKey: process.env.PRIVATE_KEY,
            clientEmail: process.env.CLIENT_EMAIL,
          })
        },
        collection
      )

    this.collection = this.app
      .firestore()
      .collection(collection)

    // this.bucket = this.app.storage().bucket('gs://connect-cbff7.appspot.com');
  }
}

module.exports = AbstractRepository;