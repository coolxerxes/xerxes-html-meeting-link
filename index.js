const express = require('express')
const path = require('path')
// const usersRepository = require('./models/users.repository');

const firebaseAdmin = require('firebase-admin');
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

    initialApp
      .firestore()
      .collection('users')
const PORT = process.env.PORT || 5001

express()
  .use('/assets', express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/hostpost', (req, res) => res.render('pages/hostpost'))
  .get('/register', (req, res) => res.render('pages/registration-page'))
  .get('/family', (req, res) => res.render('pages/family'))
  .get('/detail', (req, res) => res.render('pages/detail'))
  .get('/catagorypost', (req, res) => res.render('pages/catagorypost'))
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

