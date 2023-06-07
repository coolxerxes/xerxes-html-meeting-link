const AbstractRepository = require("./abstract.repository");

class ItemsRepository extends AbstractRepository {
  constructor() {
    super('items')
  }
 
  async addItem(name, address, phone, hours, website, description, latitude, longitude, eventId) {
    try {
      await this.collection.add({
        name, address, phone, hours, website, description, latitude, longitude, eventId
      })
    } catch {

    }
  }
  
  async updateItem(id, name, address, phone, hours, website, description, latitude, longitude, eventId) {
    try {
      await this.collection.doc(id).update({ name, address, phone, hours, website, description, latitude, longitude, eventId })
    } catch {

    }
  }

  async getItemList() {
    try {
      const { docs } = await this.collection.get();
      
      const data = docs.map(doc => {
        return {
          id: doc.id,
          name: doc.get('name'), 
          address: doc.get('address'), 
          phone: doc.get('phone'),
          hours: doc.get('hours'), 
          website: doc.get('website'), 
          description: doc.get('description'), 
          latitude: doc.get('latitude'), 
          longitude: doc.get('longitude'), 
          eventId: doc.get('eventId'),
        }
      });

      return data
    } catch {

    }
  }

  async getItemById(id) {
    try {
      const doc = await this.collection.doc(id).get();

      return {
        name: doc.get('name'),
        address: doc.get('address'),
        phone: doc.get('phone'),
        hours: doc.get('hours'),
        website: doc.get('website'),
        description: doc.get('description'),
        latitude: doc.get('latitude'),
        longitude: doc.get('longitude'),
        eventId: doc.get('eventId'),
      }
    } catch {
      return {}
    }
  }

  async getItemListByEvents(eventIds) {
    try {
      const { docs } = await this.collection.where('eventId', 'in', eventIds).get();
      
      const data = docs.map(doc => {
        return {
          id: doc.id,
          name: doc.get('name'), 
          address: doc.get('address'), 
          phone: doc.get('phone'),
          hours: doc.get('hours'), 
          website: doc.get('website'), 
          description: doc.get('description'), 
          latitude: doc.get('latitude'), 
          longitude: doc.get('longitude'), 
          eventId: doc.get('eventId'),
        }
      });

      return data
    } catch {

    }
  }
}

module.exports = new ItemsRepository();