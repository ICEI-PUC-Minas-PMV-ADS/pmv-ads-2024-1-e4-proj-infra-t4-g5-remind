import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db-connection.js';
import Purchase from './src/models/PurchaseSchema.js';
import Payment from './src/models/PaymentSchema.js';
import PurchasePaymentRelation from './src/models/PurchasePaymentRelationSchema.js';

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, './.env') });

connectDB();

const app = express();
app.use(bodyParser.json());

// Rota para criação de Purchase
app.post('/purchase', async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.status(201).send(purchase);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para criação de Payment
app.post('/payment', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send(payment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para criação da relação entre Purchase e Payment
app.post('/purchase-payment-relation', async (req, res) => {
  try {
    const relation = new PurchasePaymentRelation(req.body);
    await relation.save();
    res.status(201).send(relation);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
