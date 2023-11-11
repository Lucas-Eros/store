const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('../app/routes/productRoutes');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


mongoose.connect('mongodb://0.0.0.0:27017/store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err.message);
});

app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
