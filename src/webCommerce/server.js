import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db-connection.js';
import Purchase from './src/models/PurchaseSchema.js';
import Payment from './src/models/PaymentSchema.js';
import SubscriptionStatus from './src/models/SubscriptionStatusSchema.js';

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, './.env') });

// Conectar ao banco de dados
connectDB();

const app = express();
app.use(cors());
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

// Rota para criação de SubscriptionStatus
app.post('/subscription-status', async (req, res) => {
  try {
    const { purchase_id, payment_id } = req.body;

    const status = purchase_id && payment_id ? true : false;

    const subscriptionStatus = new SubscriptionStatus({
      purchase_id,
      payment_id,
      status,
    });

    await subscriptionStatus.save();
    res.status(201).send(subscriptionStatus);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
