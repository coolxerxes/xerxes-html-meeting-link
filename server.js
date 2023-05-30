var express = require('express');
var exphbs = require('express-handlebars');
var cors = require('cors');
var fileUpload = require('express-fileupload');
var path = require('path');
const UsersRepository = require('./models/users.repository');

const usersRepository = new UsersRepository();

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

app.use(cors());
app.use(fileUpload());
app.use('/api', router);

router.post('/upload', function(req, res) {
  const title = req.body.name;
  const file = req.files.file;

  console.log(title);

  file.mv(`./assets/images/${title}.png`, (err) => {
    if (err) {
      return console.log(err)
    }
    return console.log('successfully uploaded');
  })
  res.sendStatus(200);
});

router.post('/login', async function(req, res) {
  const { email, type, password } = req.body;

  console.log(email, type);
  const result = await usersRepository.login(email, type, password);

  res.status(200).json(result);
});

router.post('/register', async function (req, res) {
  const { name, email, type, password } = req.body;

  const result = await usersRepository.register(name, email, type, password);

  res.status(200).json(result);
})

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/catagorypost', function (req, res) {
  res.render('catagorypost');
})

app.get('/hostpost', function (req, res) {
  res.render('hostpost');
})

app.get('/login', function (req, res) {
  res.render('login');
})

app.get('/register', function (req, res) {
  res.render('registration-page');
})

app.listen(3000, () => {
  console.log('Server is running');
});

