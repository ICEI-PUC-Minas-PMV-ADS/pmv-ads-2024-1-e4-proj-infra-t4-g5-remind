require('./db-connection.js');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), './src/.env') }); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');

const developEnv = process.env.DEVELOP;

const swaggerYaml = path.resolve(
  process.cwd(),
  `${developEnv ? './swagger.yaml' : './src/ReminderAPI/swagger.yaml'}`,
);

const swaggerDocument = YAML.load(swaggerYaml);

const CSS_URL =
  'https://cdn.jsdelivr.net/npm/swagger-ui-dist@4.3.0/swagger-ui.css';

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Credentials',
  );
  next();
});

app.use('/users', userRoutes);

app.use('/notes', notesRoutes);

//swagger
app.use(
  '/api',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl: CSS_URL,
    customSiteTitle: 'RemindApi Docs',
    customJs: `https://cdn.jsdelivr.net/npm/swagger-ui-dist@4.3.0/swagger-ui-bundle.js`,
  }),
);

module.exports = app;
