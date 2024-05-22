import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
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

// Configuração de CORS
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5000',
  'https://o4507142041436160.ingest.de.sentry.io'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Helmet configuração
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://apis.google.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https://sentry.io"],
      connectSrc: ["'self'", "https://sentry.io", "https://o4507142041436160.ingest.de.sentry.io", "http://localhost:5173", "http://localhost:5000"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
  dnsPrefetchControl: { allow: true },
  frameguard: { action: 'deny' },
  hidePoweredBy: true,
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  ieNoOpen: true,
  noSniff: true,
  permittedCrossDomainPolicies: { permittedPolicies: 'none' },
  referrerPolicy: { policy: 'no-referrer' },
  xssFilter: true,
}));

app.use(bodyParser.json());

app.options('*', cors()); // Enable pre-flight requests for all routes

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
