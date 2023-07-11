const AbstractRepository = require("./abstract.repository");
const UUID = require('uuid');
const Event = require('../models/event.model');

const eventsRepository = {
  addEvents: async (categoryId, title, imageFile) => {
    try {
      await Event.create({
        title,
        categoryId,
      });
      return true;
    } catch {
      return false;
    }
  },
  getEventImageMap: async () => {
    try {
      const eventList = await Event.findAll({});
      const imageMap = {}

      eventList.forEach(_event => {
        imageMap[_event.id] = _event.title;
      });

      return imageMap;
    } catch {
      return {};
    }
  },
  getEventListByCategoryId: async (categoryId) => {
    try {
      const eventList = await Event.findAll({
        where: {
          categoryId
        }
      });

      const result = eventList.map(_event => ({
        id: _event.id,
        title: _event.title,
      }));

      return result;
    } catch {
      return [];
    }
  },
  getEventListByDirectCategoryId: async (directCategoryId) => {
    try {
      const eventList = await Event.findAll({
        where: {
          directCategoryId
        }
      });

      const result = eventList.map(_event => ({
        id: _event.id,
        title: _event.title,
      }));

      return result;
    } catch {
      return [];
    }
  }
}

class EventsRepository extends AbstractRepository {
  constructor() {
    super('events')
  }

  async addEvents(categoryId, title, imageFile) {
    try {
      const _uuid = UUID.v4();
      // const imageResponse = await this.bucket.upload(imageFile, {
      //   destination: _uuid + '.png',
      //   resumable: true,
      //   metadata: {
      //     metadata: {
      //       firebaseStorageDownloadTokens: 'xerxes',
      //     }
      //   }
      // });

      this.collection.add({
        categoryId,
        title,
        // image: _uuid,
        // image: title,
      })
    } catch {

    }
  }

  async getEventImageMap() {
    try {
      const { docs } = await this.collection.get();

      const imageMap = {}
      docs.map(doc => {
        // imageMap[doc.id] = doc.get('image')
        imageMap[doc.id] = doc.get('title')
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

module.exports = eventsRepository;