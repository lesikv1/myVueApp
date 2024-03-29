const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const Controller = require('./controlers')
const dirname = require('../config')

const serveStatic = require('serve-static');

const app = express();
const router = express.Router();

app.use(serveStatic(dirname + "/dist"));

mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const API_PORT = process.env.API_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.post('/users', Controller.createUser)
router.get('/users', Controller.getAllUsers)
router.post('/delete-user', Controller.deleteUser)
router.post('/set-favorite', Controller.setFavorite)
router.post('/edit-user', Controller.editUser)

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));