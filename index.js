const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// var express = require('express');
// var exphbs = require('express-handlebars');
// var fileUpload = require('express-fileupload');
// var fs = require('fs');
// var http = require('http');
// const usersRepository = require('./models/users.repository');
// const categoriesRepository = require('./models/categories.repository');
// const eventsRepository = require('./models/events.repository');
// const itemsRepository = require('./models/items.repository');

// const path = require('path')

// const PORT = process.env.PORT || 5001

// const app = express()

// app.set("views", path.join(__dirname, "views"));
// app.set('view engine', 'ejs');
// // var router = express.Router();

// // app.use(express.urlencoded({
// //   extended: false,
// // }));

// // app.use('/assets', express.static('public'));

// // app.use(fileUpload());
// // app.use('/api', router);

// // router.post('/upload', async function(req, res) {
// //   const title = req.body.name;
// //   const categoryId = req.body.categoryId;
// //   const file = req.files.file;

// //   file.mv(`./public/images/${title}.png`, async (err) => {
// //     if (err) {
// //       return console.log(err)
// //     }

// //     await eventsRepository.addEvents(categoryId, title, `./public/images/${title}.png`)

// //     res.sendStatus(200);
// //   })
  
// // });

// // router.post('/login', async function(req, res) {
// //   const { email, type, password } = req.body;

// //   const result = await usersRepository.login(email, type, password);

// //   res.status(200).json(result);
// // });

// // router.post('/register', async function (req, res) {
// //   const { name, email, type, password } = req.body;

// //   const result = await usersRepository.register(name, email, type, password);

// //   res.status(200).json(result);
// // });

// // router.get('/categories', async function (req, res) {
// //   const categories = await categoriesRepository.getCategoryList();

// //   res.status(200).json(categories);
// // })

// // router.get('/categories/:id', async function (req, res) {
// //   const id = req.params.id;
// //   const events = await eventsRepository.getEventListByCategoryId(id);

// //   res.status(200).json(events);
// // })

// // router.post('/item', async function (req, res) {
// //   const { name, address, phone, hours, website, description, latitude, longitude, eventId } = req.body;

// //   const result = await itemsRepository.addItem(name, address, phone, hours, website, description, +latitude, +longitude, eventId);

// //   res.sendStatus(200);
// // });

// // router.get('/imageMap', async function (req, res) {
// //   const result = await eventsRepository.getEventImageMap();

// //   res.status(200).json(result);
// // })

// // router.patch('/item', async function (req, res) {
// //   const { name, address, phone, hours, website, description, latitude, longitude, eventId, id } = req.body;

// //   await itemsRepository.updateItem(id, name, address, phone, hours, website, description, +latitude, +longitude, eventId);

// //   res.sendStatus(200);
// // });

// // router.get('/item', async function (req, res) {
// //   const result = await itemsRepository.getItemList();

// //   res.status(200).json(result);
// // })

// // router.get('/item/filter/:ids', async function (req, res) {
// //   const idsString = req.params.ids;
// //   const result = await itemsRepository.getItemListByEvents(idsString.split(','));

// //   res.status(200).json(result);
// // })

// // router.get('/item/:id', async function (req, res) {
// //   const id = req.params.id;

// //   const result = await itemsRepository.getItemById(id);

// //   res.status(200).json(result);
// // })

// // app.get('/', function(req, res) {
// //   res.render('index');
// // })

// // app.get('/catagorypost', function (req, res) {
// //   res.render('catagorypost');
// // })

// // app.get('/hostpost', function (req, res) {
// //   res.render('hostpost');
// // })

// // app.get('/login', function (req, res) {
// //   res.render('login');
// // })

// // app.get('/register', function (req, res) {
// //   res.render('registration-page');
// // })

// // app.get('/family', function (req, res) {
// //   res.render('family');
// // })

// // app.get('/detail', function (req, res) {
// //   res.render('detail');
// // })


// // // .use(express.static(path.join(__dirname, 'public')))
// //   // .set('views', path.join(__dirname, 'views'))
// //   // .set('view engine', 'ejs')
// //   // .get('/', (req, res) => res.render('pages/index'))

// app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

