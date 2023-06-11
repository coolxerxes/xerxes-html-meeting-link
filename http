var express = require('express');
var exphbs = require('express-handlebars');
var cors = require('cors');
var fileUpload = require('express-fileupload');
var path = require('path');
var https = require('https');
var fs = require('fs');
var http = require('http');
var sessions = require('express-session');
const usersRepository = require('./models/users.repository');
const categoriesRepository = require('./models/categories.repository');
const eventsRepository = require('./models/events.repository');
const itemsRepository = require('./models/items.repository');
const session = require('express-session');

// usersRepository.login('dezzy239king@gmail.com', 'GOOGLE').then(console.log);

// usersRepository.register('Anton', 'coolxerxes14@gmail.com', 'GOOGLE').then(console.log);

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'hbs');
var router = express.Router();

app.use(express.urlencoded({
  extended: false,
}));

app.use('/assets', express.static('public'));

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
  secret: 'desmond nettles',
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}))

app.use(cors());
app.use(fileUpload());
app.use(isAuth);
app.use('/api', router);

function isAuth(req, res, next) {
  
  if (req.path !== '/login' && req.path !== '/register' && req.method === 'GET' && !req.session.user) {
    res.redirect('/login')
    return
  }

  next();
}

router.post('/upload', async function(req, res) {
  const title = req.body.name;
  const categoryId = req.body.categoryId;
  const file = req.files.file;

  file.mv(`./public/images/${title}.png`, async (err) => {
    if (err) {
      return console.log(err)
    }

    await eventsRepository.addEvents(categoryId, title, `./public/images/${title}.png`)

    res.sendStatus(200);
  })
  
});

router.post('/login', async function(req, res) {
  const { email, type, password } = req.body;

  const result = await usersRepository.login(email, type, password);

  if (result.status === 'SUCCESS') {
    req.session.user = {
      ...result,
      status: undefined,
    }
  }

  res.status(200).json(result);
});

router.post('/register', async function (req, res) {
  const { name, email, type, password } = req.body;

  const result = await usersRepository.register(name, email, type, password);

  res.status(200).json(result);
});

router.get('/categories', async function (req, res) {
  const categories = await categoriesRepository.getCategoryList();

  res.status(200).json(categories);
})

router.get('/categories/:id', async function (req, res) {
  const id = req.params.id;
  const events = await eventsRepository.getEventListByCategoryId(id);

  res.status(200).json(events);
})

router.post('/item', async function (req, res) {
  const { name, address, phone, hours, website, description, latitude, longitude, eventId } = req.body;

  const result = await itemsRepository.addItem(name, address, phone, hours, website, description, +latitude, +longitude, eventId);

  res.sendStatus(200);
});

router.get('/imageMap', async function (req, res) {
  const result = await eventsRepository.getEventImageMap();

  res.status(200).json(result);
})

router.patch('/item', async function (req, res) {
  const { name, address, phone, hours, website, description, latitude, longitude, eventId, id } = req.body;

  await itemsRepository.updateItem(id, name, address, phone, hours, website, description, +latitude, +longitude, eventId);

  res.sendStatus(200);
});

router.get('/item', async function (req, res) {
  const result = await itemsRepository.getItemList();

  res.status(200).json(result);
})

router.get('/item/filter/:ids', async function (req, res) {
  const idsString = req.params.ids;
  const result = await itemsRepository.getItemListByEvents(idsString.split(','));

  res.status(200).json(result);
})

router.get('/item/:id', async function (req, res) {
  const id = req.params.id;

  const result = await itemsRepository.getItemById(id);

  res.status(200).json(result);
})

app.get('/addphoto', function (req, res) {
  res.render('addphoto');
})

app.get('/catagorypost', function (req, res) {
  res.render('catagorypost');
})

app.get('/detail', function (req, res) {
  res.render('detail');
})

app.get('/family', function (req, res) {
  res.render('family');
})

app.get('/familyfunctions', function (req, res) {
  res.render('familyfunctions');
})

app.get('/familyphotos', function (req, res) {
  res.render('familyphotos');
})

app.get('/hostpost', function (req, res) {
  res.render('hostpost');
})

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/localpostfunctions', function (req, res) {
  res.render('localpostfunctions');
})

app.get('/login', function (req, res) {
  res.render('login');
})

app.get('/register', function (req, res) {
  res.render('registration-page');
})
app.get('/teamfunctions', function (req, res) {
  res.render('teamfunctions');
})

const privateKey = fs.readFileSync('./server.key', 'utf-8');
const certificate = fs.readFileSync('./server.crt', 'utf-8');

const options = {
  key: privateKey,
  cert: certificate,
}

const server = http.createServer(
  options,
  app,
)

server.listen(process.env.PORT || 3000
, () => {
  console.log(process.env.PORT)
  console.log('Server running on port https://127.0.0.1:3000')
})
