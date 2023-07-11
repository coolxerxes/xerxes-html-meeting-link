const AbstractRepository = require("./abstract.repository");
const uuid = require('uuid');
const Category = require('../models/category.model');

const categoriesRepoistory = {
  getCategoryList: async () => {
    try {
      const data = await Category.findAll({
        where: {
          parentId: 0
        }
      });

      const result = data.map(_item => ({
        id: _item.id,
        title: _item.title,
      }));

      for (let i = 0; i < result.length; ++ i) {
        const subData = await Category.findAll({
          where: {
            parentId: result[i].id
          }
        });

        result[i].children = subData.map(_item => ({
          id: _item.id,
          title: _item.title,
        }));
      }
  
      return result;
    } catch {
      console.log('Database Error');
    }
  }
}

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
          title: doc.get('label')
        }
      });

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

module.exports = categoriesRepoistory;