require('./db-connection.js');
const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swaggerYaml = path.resolve(process.cwd(), './swagger.yaml');

const swaggerDocument = YAML.load(swaggerYaml);

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use('/notes', notesRoutes);

//swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
