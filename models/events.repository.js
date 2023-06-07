const AbstractRepository = require("./abstract.repository");
const UUID = require('uuid');

class EventsRepository extends AbstractRepository {
  constructor() {
    super('events')
  }

  async addEvents(categoryId, title, imageFile) {
    try {
      const _uuid = UUID.v4();
      const imageResponse = await this.bucket.upload(imageFile, {
        destination: _uuid + '.png',
        resumable: true,
        metadata: {
          metadata: {
            firebaseStorageDownloadTokens: 'xerxes',
          }
        }
      });

      this.collection.add({
        categoryId,
        title,
        image: _uuid
      })
    } catch {

    }
  }

  async getEventImageMap() {
    try {
      const { docs } = await this.collection.get();

      const imageMap = {}
      docs.map(doc => {
        imageMap[doc.id] = doc.get('image')
        return;
      });
  
      return imageMap;
    } catch {
      return {}
    }
  }

  async getEventListByCategoryId(categoryId) {
    try {
      const { docs } = await this.collection.where('categoryId', '=', categoryId).get();

      const data = docs.map(doc => {
        return {
          id: doc.id,
          title: doc.get('title')
        }
      })

      return data;
    } catch {
      return [];
    }
  }
}

module.exports = new EventsRepository();