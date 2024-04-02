const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use('/notes', notesRoutes);

//swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
