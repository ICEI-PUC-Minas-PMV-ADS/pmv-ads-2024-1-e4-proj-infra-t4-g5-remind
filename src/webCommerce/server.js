import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db-connection.js';
import purchaseRoutes from './src/routes/purchaseRoutes.js';
import paymentRoutes from './src/routes/paymentRoutes.js';
import subscriptionStatusRoutes from './src/routes/subscriptionStatusRoutes.js';

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, './.env') });

// Conectar ao banco de dados
connectDB();

const app = express();

// Configuração de CORS
const allowedOrigins = [
  'http://localhost:5174',
  'http://localhost:5500',
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
      connectSrc: ["'self'", "https://sentry.io", "https://o4507142041436160.ingest.de.sentry.io", "http://localhost:5174", "http://localhost:5000"],
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

// Rotas
app.use('/api', purchaseRoutes);
app.use('/api', paymentRoutes);
app.use('/api', subscriptionStatusRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`CLIENT Server running on port ${PORT}`));
