const sequelize = require('./init');
const { DataTypes } = require('sequelize');

const ItemModel = sequelize.define('item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  address: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  eventId: {
    type: DataTypes.STRING,
    field: 'event_id',
  },
  hours: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.NUMBER
  },
  longitude: {
    type: DataTypes.NUMBER
  },
  name: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  }
});

// ItemModel.bulkCreate([
//   {
//       "id": "GBR6JEW8Yx1maVCHy7jn",
//       "name": "North Fort Myers Community Pool",
//       "address": " 5170 ORANGE GROVE BLVD #5238 FORT MYERS FL 33903",
//       "phone": "12396524520",
//       "hours": "Friday 9 AM–4:15 PM Saturday 9 AM–4:15 PM Sunday Closed Monday Closed Tuesday 10 AM–4:15 PM Wednesday 9 AM–4:15 PM Thursday 9 AM–4:15 PM",
//       "website": "http://leeparks.org/facility-info/facility-details.cfm?Project_Num=0078",
//       "description": "",
//       "latitude": 26.666042,
//       "longitude": -81.91469,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   },
//   {
//       "id": "KFotcLcIaX8FE6sLfBjt",
//       "name": "Golfview Pool",
//       "address": " 1865 Golf View Ave, Fort Myers, FL 33901",
//       "phone": "12393217565",
//       "hours": " Monday 6:30 AM–10 PM Tuesday 6:30 AM–10 PM Wednesday 6:30 AM–10 PM Thursday 6:30 AM–10 PM Friday 6:30 AM–10 PM Saturday 6:30 AM–10 PM Sunday 6 AM–8:30 PM",
//       "website": "",
//       "description": "",
//       "latitude": 26.61086,
//       "longitude": -81.87479,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   },
//   {
//       "id": "TjPeQSATW0m82f6wjB0U",
//       "name": " Pine Island Community Pool",
//       "address": " 5675 SESAME DR BOKEELIA FL 33922",
//       "phone": "",
//       "hours": "",
//       "website": "",
//       "description": "",
//       "latitude": 26.614964,
//       "longitude": -82.12051,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   },
//   {
//       "id": "bGE8dmgHPaVZ7rpYLKpy",
//       "name": "Fort Myers Aquatic Center",
//       "address": " 1750 MATHEW DR FORT MYERS FL 33907",
//       "phone": "",
//       "hours": "",
//       "website": "",
//       "description": "",
//       "latitude": 26.588982,
//       "longitude": -81.87632,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   },
//   {
//       "id": "iXM5rKK6q5WhQdLNvZut",
//       "name": " Bonita Springs Community Pool",
//       "address": "26890 PINE AVE BONITA SPRINGS FL 34135",
//       "phone": "12399471948",
//       "hours": "Friday 8 AM–4 PM Saturday 10 AM–4 PM Sunday Closed Monday Closed Tuesday 8 AM–4 PM Wednesday 8 AM–4 PM Thursday 8 AM–4 PM",
//       "website": " http://www.bonitaspringsparks.org/community_pool",
//       "description": "",
//       "latitude": 26.346155,
//       "longitude": -81.78382,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   },
//   {
//       "id": "iZyct2GD9WI5Ec3HatYv",
//       "name": " Lehigh Acres Community Pool",
//       "address": "1400 W 5TH LEHIGH ACRES FL 33972",
//       "phone": "12393698277",
//       "hours": "Friday 9 AM–4:15 PM Saturday 9 AM–4 PM Sunday Closed Monday Closed Tuesday 10 AM–4:15 PM Wednesday 9 AM–4:15 PM Thursday 9 AM–4:15 PM",
//       "website": "http://www.leegov.com/parks/pools/lehighpool",
//       "description": "",
//       "latitude": 26.618021,
//       "longitude": -81.64786,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   },
//   {
//       "id": "owFQ2A9LQaQBnEfYrvac",
//       "name": "San Carlos Community Pool",
//       "address": "8208 SANIBEL BLVD FORT MYERS FL 33967",
//       "phone": "12392676002",
//       "hours": "Friday 9 AM–4:15 PM Saturday 9 AM–4:15 PM Sunday Closed Monday Closed Tuesday 10 AM–4:15 PM Wednesday 9 AM–4:15 PM Thursday 9 AM–4:15 PM",
//       "website": " http://www.leegov.com/parks/pools/sancarlospool Description",
//       "description": "",
//       "latitude": 26.472229,
//       "longitude": -81.81501,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   },
//   {
//       "id": "zFfk0oN9nD8JF3H0ATqE",
//       "name": "Yacht Club Community Park",
//       "address": " 5819 DRIFTWOOK PKWY CAPE CORAL FL 33904",
//       "phone": "",
//       "hours": "",
//       "website": "",
//       "description": "",
//       "latitude": 26.54302,
//       "longitude": -81.95099,
//       "eventId": "WfX3PwBcFWnna6lITu0B"
//   }
// ].map(_item => ({
//   ..._item,
//   eventId: 13,
//   id: undefined,
// })))

module.exports = ItemModel;