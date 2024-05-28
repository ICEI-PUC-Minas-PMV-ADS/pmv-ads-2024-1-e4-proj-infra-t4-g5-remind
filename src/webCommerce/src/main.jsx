import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PurchaseProvider } from './context/PurchaseContext.jsx';
import { PaymentProvider } from './context/PaymentContext.jsx';
import './index.css'

//Settings from Sentry
/* import * as Sentry from "@sentry/react";
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: "https://c1ebfef4d102257c30521c0ab48e5f17@o4507142041436160.ingest.de.sentry.io/4507253547532368",
  integrations: [
    new Integrations.BrowserTracing(),
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ], */
  // Performance Monitoring
  /* tracesSampleRate: 1.0, */ //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  /* tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/], */
  // Session Replay
  /* replaysSessionSampleRate: 0.1, */ // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  /* replaysOnErrorSampleRate: 1.0, */ // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
/* }); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PurchaseProvider>
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </PurchaseProvider>
  </React.StrictMode>,
)
