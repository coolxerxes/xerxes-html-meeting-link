const AbstractRepository = require("./abstract.repository");
const uuid = require('uuid');

class UsersRepository extends AbstractRepository {
  constructor() {
    super('categories')
  }

  async getCategoryList() {
    try {
      const { docs } = await this.collection.get();
      
      const data = docs.map(doc => {
        return {
          id: doc.id,
          title: doc.get('title')
        }
      });

      return data
    } catch {
      return []
    }
  }

  // async getEventListByCategoryId(id) {
  //   try {
  //     const { docs } = await this.collection
  //       .doc(id)
  //       .collection('events')
  //       .get()
      

  //     const data = docs.map(doc => {
  //       return {
  //         id: doc.id,
  //         title: doc.get('title')
  //       }
  //     });

  //     return data;
  //   } catch {
  //     return [];
  //   }
  // }

  async addNewCategory(title, imageFile) {
    
  }

  async addNewEvent(title, file) {
    
  }
}

module.exports = new UsersRepository();