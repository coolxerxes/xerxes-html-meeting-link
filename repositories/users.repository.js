const AbstractRepository = require("./abstract.repository");
const User = require('../models/user.model');

const usersRepository = {
  login: async (email, type, password = '') => {
    try {
      const data = await User.findOne({
        where: {
          email,
        }
      });

      if (data === null) {
        return {
          status: 'FAILED',
          message: 'Not Registered'
        }
      }

      const _password = data.password;
      const _type = data.type;
      const name = data.name;
      const id = data.id;

      if (_type !== type) {
        return {
          status: 'FAILED',
          message: 'Not Correct Login Type'
        }
      }

      if (_type === 'EMAIL' && password !== _password) {
        return {
          status: 'FAILED',
          message: 'Not Correct Password'
        }
      }

      return {
        status: 'SUCCESS',
        name,
        id,
      }
    } catch {
      return {
        status: 'ERROR',
        message: 'Database Error'
      }
    }
  },
  register: async (name, email, type, password = '') => {
    try {
      const data = await User.findOne({
        where: {
          email,
        }
      });

      if (data !== null) {
        return {
          status: 'FAILED',
          message: 'Already Registered'
        }
      }

      const user = await User
        .create({
          name,
          email,
          type,
          password
        });

      return {
        status: 'SUCCESS',
        id: user.id,
        name,
      }
    } catch {
      return {
        status: 'ERROR',
        message: 'Database Error'
      }
    }
  }
}

class UsersRepository extends AbstractRepository {
  constructor() {
    super('users1')
  }

  async login(email, type, password = '') {
    try {
      const data = await this.collection
        .where('email', '=', email)
        .get();

      const { docs } = data;

      if (docs.length === 0) {
        return {
          status: 'FAILED',
          message: 'Not Registered'
        }
      }

      const user = docs[0];

      const _password = user.get('password');
      const _type = user.get('type');
      const name = user.get('name');
      const id = user.get('id');

      if (_type !== type) {
        return {
          status: 'FAILED',
          message: 'Not Correct Login Type'
        }
      }

      if (_type === 'EMAIL' && password !== _password) {
        return {
          status: 'FAILED',
          message: 'Not Correct Password'
        }
      }

      return {
        status: 'SUCCESS',
        name,
        id,
      }
    } catch {
      return {
        status: 'ERROR',
        message: 'Database Error'
      }
    }

  }

  async register(name, email, type, password = '') {
    try {
      const data = await this.collection
        .where('email', '=', email)
        .get();

      const { docs } = data;

      if (docs.length > 0) {
        return {
          status: 'FAILED',
          message: 'Already Registered'
        }
      }

      const user = await this.collection
        .add({
          name,
          email,
          type,
          password
        });

      return {
        status: 'SUCCESS',
        id: user.id,
        name,
      }
    } catch {
      return {
        status: 'ERROR',
        message: 'Database Error'
      }
    }
  }

}

module.exports = usersRepository;