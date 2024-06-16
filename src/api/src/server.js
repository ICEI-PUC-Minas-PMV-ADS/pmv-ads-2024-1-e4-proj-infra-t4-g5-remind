const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), './src/.env') }); // Carrega as variáveis de ambiente do arquivo .env
const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `********* Servidor rodando em http://localhost:${port} *********\n********* Docs http://localhost:${port}/api *********`,
  );
});
