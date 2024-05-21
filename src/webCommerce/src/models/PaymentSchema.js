import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  bankName: String,
  bankAccountNumber: String,
  bankRoutingNumber: String,
  bankAccountAgencyNumber: String,
  clientName: String,
  clienteCpf: String,
  bankTransferTermsAccepted: Boolean,
  paymentMethod: String, // This can be 'bank', 'credit_card', etc.
  creditCardNumber: String,
  creditCardExpiry: String,
  creditCardCVV: String
});

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;
