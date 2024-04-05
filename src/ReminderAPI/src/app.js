require('./db-connection.js');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), './src/.env') }); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const developEnv = process.env.DEVELOP;

const swaggerYaml = path.resolve(
  process.cwd(),
  `${developEnv ? './swagger.yaml' : './src/ReminderAPI/swagger.yaml'}`,
);

const swaggerDocument = YAML.load(swaggerYaml);

const CSS_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use('/notes', notesRoutes);

//swagger
app.use(
  '/api',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCss: CSS_URL }),
);

module.exports = app;
