const { Op } = require("sequelize");

const AbstractRepository = require("./abstract.repository");
const Item = require('../models/item.model');

const itemsRepository = {
  addItem: async (name, address, phone, hours, website, description, latitude, longitude, eventId) => {
    try {
      await Item.create({
        name, address, phone, hours, website, description, latitude, longitude, eventId
      })

      return true;
    } catch {
      return false;
    }
  },

  updateItem: async (id, name, address, phone, hours, website, description, latitude, longitude, eventId) => {
    try {
      await Item.update({
        name, address, phone, hours, website, description, latitude, longitude, eventId
      }, {
        where: {
          id
        }
      });

      return true;
    } catch {
      return false;
    }
  },

  getItemList: async () => {
    try {
      const itemList = await Item.findAll({});

      const result = itemList.map(_item => ({
        id: _item.id,
        name: _item.name, 
        address: _item.address, 
        phone: _item.phone,
        hours: _item.hours, 
        website: _item.website, 
        description: _item.description, 
        latitude: +_item.latitude, 
        longitude: +_item.longitude, 
        eventId: _item.eventId,
      }));

      return result;
    } catch {
      return [];
    }
  },

  getItemById: async (id) => {
    try {
      const _item = await Item.findByPk(id);

      return {
        id: _item.id,
        name: _item.name, 
        address: _item.address, 
        phone: _item.phone,
        hours: _item.hours, 
        website: _item.website, 
        description: _item.description, 
        latitude: +_item.latitude, 
        longitude: +_item.longitude, 
        eventId: _item.eventId,
      }
    } catch {
      return {}
    }
  },

  getItemListByEvents: async (eventIds) => {
    try {
      const itemList = await Item.findAll({
        where: {
          eventId: {
            [Op.in]: eventIds,
          }
        }
      });

      const result = itemList.map(_item => ({
        id: _item.id,
        name: _item.name, 
        address: _item.address, 
        phone: _item.phone,
        hours: _item.hours, 
        website: _item.website, 
        description: _item.description, 
        latitude: +_item.latitude, 
        longitude: +_item.longitude, 
        eventId: _item.eventId,
      }));

      return result;
    } catch {
      return [];
    }
  }
}

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

module.exports = itemsRepository;