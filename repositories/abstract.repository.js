const firebaseAdmin = require('firebase-admin');

class AbstractRepository {
  collection = null;
  bucket = null;

  constructor(collection) {
    const initialApp = firebaseAdmin
      .initializeApp(
        {
          credential: firebaseAdmin.credential.cert({
            projectId: 'connect-cbff7',
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCt45aOcasjSc0A\nvd5CpxORK0fdGHYg9+tseCo3tz0uWkmsSM1UJJXSrOOTXLI0dgAQHdxUKwAOHhZg\nf+TgQWDk3M9KRwM+cx5zeWCXjKuzz1qJF46jvOeo/phiQH+8/5HKjGXCCz9U7cSp\nGmRSdvR1DGXa6rclv+jnO/wRiXpRHKT+FrTTbUfUVkOxLjcyqOPNlCKWGO9Tj3lm\nfRdYKVNWc6SsO1+PeWlEqNGUtMcyX4Dt8m99PzdBq166pMWhHR8QbPGaU+8hlLed\nS0NAdH7beqf2+/WOZfSTL6Ht698iWaNlQ0EVCW9gH9XbZAqqEBEvLJy5xau9N12y\nXfvuOLNnAgMBAAECggEAHKCy6TmagMFGMGCR5mxGQuiauLItxIi8aAuye6C9wFNZ\n/LSxpTAuwFP5VYn1xsBEi2K3It4/cJOQgIudvTPWRWd68xIU3SOruDwb5Gdi30P8\ndkR8FcXkZ8SehtJylUWIFY4etJ8QaqWIcoSnTpJJ9bk4TZ3F0D+zktojyilVi2PD\nMHMFFo2af5wpZO6XSgQdYAEErLOUWpUYQ1aW/VvDqL1X3V5T9ej8BO9PnIPtbfH3\nSIs+6xbYTQHvlpG5HiQonkEjKwgzAWENpRid1Arlu92TO4Daz81FTlENdiiyZPlW\nxsnkwTR+0+QOCS3a/0i7YGZfv0FO1zaNSc3ql4/PZQKBgQDzfpM7yB5YRGwL1rJZ\nlLTldSecZ90rfX8rQTrG3ndoPSejNAAfugpni0FFDIxu4QBWjjy7f8zC8cKN+3M/\niHZ+eXHWSQO3P0FRvmO3avsLT7ByuzWwAern5TdvdxuUhS+T+SyKqKRh+SUgysta\nhCzTX7W4e7eUY4FThhLWakqC7QKBgQC20do0hP+XnSOHtCRI8UinOtDA70rLab2G\ntjWZ0/ITO4jZvvroCf1eeV61qpWPhW5GKF3L2ej11xA5KxJasP5yH3mVh7vdoy/8\nMzMSAUfR+/Z0v4n/igjr0+l30wYjWprsLE6fqsdBtevL96yOGMXvYOE+S1c6Cdlt\nnYZS1YFhIwKBgD362Ct9cwvwzrfsvJVE3w8RVTXg0lGBrl8qSXXZpvdnqbFHSUjK\nKF/W+JRE73JB374okpj/nPV6aJWPjfR8Hf1vmGR9TW7VsSDHn8ZOevyUGkv6D15v\n/oVsuUGsRd72T/gQkx/wcXdm3eaM+FpgDrD3SeBdzYr+EStbk2v0vma5AoGAOmH/\n3h/PA9sB2rdzkvvC6OzGd6azawxkox2TNoHR38R2apsrw2hVSpNV5IwKYSAKXEtN\n0OjRFZlNrAQOQ3ocd9OHX3JOU3RmwZKUL57LEcr2JMh6SGoLeUxeVY7FegrYSK3J\nmgHOyjRPjf6VU3ej1lNI+zzSKU216uSQXemi/KMCgYEAvJ88I89rSmSpFN14Nm+M\nCMMhRVRy394vzbmc79Ld1RTxbY7qk/qZ8pMrxs0PZ3ISwwhOmrxcO/x4RkPdYgWB\nCXLBG/rO3BnpLaaj/YP4yPQ8qlVFLHCdBgpEFTfvXlrwE6hX8zqaLPBkyJZJlEDT\nJMjpJSG3t1+OECgJQs/AUng=\n-----END PRIVATE KEY-----\n",
            clientEmail: 'firebase-adminsdk-8mtyv@connect-cbff7.iam.gserviceaccount.com',
          })
        },
        collection
      )

    this.collection = initialApp
      .firestore()
      .collection(collection)

    this.bucket = initialApp.storage().bucket('gs://connect-cbff7.appspot.com');
  }
}

// this.collection = firebaseAdmin
//       .initializeApp(
//         {
//           credential: firebaseAdmin.credential.cert({
//             projectId: 'connect-cbff7',
//             privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCt45aOcasjSc0A\nvd5CpxORK0fdGHYg9+tseCo3tz0uWkmsSM1UJJXSrOOTXLI0dgAQHdxUKwAOHhZg\nf+TgQWDk3M9KRwM+cx5zeWCXjKuzz1qJF46jvOeo/phiQH+8/5HKjGXCCz9U7cSp\nGmRSdvR1DGXa6rclv+jnO/wRiXpRHKT+FrTTbUfUVkOxLjcyqOPNlCKWGO9Tj3lm\nfRdYKVNWc6SsO1+PeWlEqNGUtMcyX4Dt8m99PzdBq166pMWhHR8QbPGaU+8hlLed\nS0NAdH7beqf2+/WOZfSTL6Ht698iWaNlQ0EVCW9gH9XbZAqqEBEvLJy5xau9N12y\nXfvuOLNnAgMBAAECggEAHKCy6TmagMFGMGCR5mxGQuiauLItxIi8aAuye6C9wFNZ\n/LSxpTAuwFP5VYn1xsBEi2K3It4/cJOQgIudvTPWRWd68xIU3SOruDwb5Gdi30P8\ndkR8FcXkZ8SehtJylUWIFY4etJ8QaqWIcoSnTpJJ9bk4TZ3F0D+zktojyilVi2PD\nMHMFFo2af5wpZO6XSgQdYAEErLOUWpUYQ1aW/VvDqL1X3V5T9ej8BO9PnIPtbfH3\nSIs+6xbYTQHvlpG5HiQonkEjKwgzAWENpRid1Arlu92TO4Daz81FTlENdiiyZPlW\nxsnkwTR+0+QOCS3a/0i7YGZfv0FO1zaNSc3ql4/PZQKBgQDzfpM7yB5YRGwL1rJZ\nlLTldSecZ90rfX8rQTrG3ndoPSejNAAfugpni0FFDIxu4QBWjjy7f8zC8cKN+3M/\niHZ+eXHWSQO3P0FRvmO3avsLT7ByuzWwAern5TdvdxuUhS+T+SyKqKRh+SUgysta\nhCzTX7W4e7eUY4FThhLWakqC7QKBgQC20do0hP+XnSOHtCRI8UinOtDA70rLab2G\ntjWZ0/ITO4jZvvroCf1eeV61qpWPhW5GKF3L2ej11xA5KxJasP5yH3mVh7vdoy/8\nMzMSAUfR+/Z0v4n/igjr0+l30wYjWprsLE6fqsdBtevL96yOGMXvYOE+S1c6Cdlt\nnYZS1YFhIwKBgD362Ct9cwvwzrfsvJVE3w8RVTXg0lGBrl8qSXXZpvdnqbFHSUjK\nKF/W+JRE73JB374okpj/nPV6aJWPjfR8Hf1vmGR9TW7VsSDHn8ZOevyUGkv6D15v\n/oVsuUGsRd72T/gQkx/wcXdm3eaM+FpgDrD3SeBdzYr+EStbk2v0vma5AoGAOmH/\n3h/PA9sB2rdzkvvC6OzGd6azawxkox2TNoHR38R2apsrw2hVSpNV5IwKYSAKXEtN\n0OjRFZlNrAQOQ3ocd9OHX3JOU3RmwZKUL57LEcr2JMh6SGoLeUxeVY7FegrYSK3J\nmgHOyjRPjf6VU3ej1lNI+zzSKU216uSQXemi/KMCgYEAvJ88I89rSmSpFN14Nm+M\nCMMhRVRy394vzbmc79Ld1RTxbY7qk/qZ8pMrxs0PZ3ISwwhOmrxcO/x4RkPdYgWB\nCXLBG/rO3BnpLaaj/YP4yPQ8qlVFLHCdBgpEFTfvXlrwE6hX8zqaLPBkyJZJlEDT\nJMjpJSG3t1+OECgJQs/AUng=\n-----END PRIVATE KEY-----\n",
//             clientEmail: 'firebase-adminsdk-8mtyv@connect-cbff7.iam.gserviceaccount.com',
//           })
//         },
//         'categories'
//       )
//       .firestore()
//       .collection('categories')
//       .doc('4w5sjh6yYIGaj52R53P0')
//       .collection('work')
//       .get()
//       .then(({ docs }) => {
//         docs.map((value) => {
//           console.log(value);
//         })
//       })


module.exports = AbstractRepository;