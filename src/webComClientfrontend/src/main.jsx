import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PurchaseProvider } from './context/PurchaseContext.jsx';
import { PaymentProvider } from './context/PaymentContext.jsx';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PurchaseProvider>
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </PurchaseProvider>
  </React.StrictMode>,
)
