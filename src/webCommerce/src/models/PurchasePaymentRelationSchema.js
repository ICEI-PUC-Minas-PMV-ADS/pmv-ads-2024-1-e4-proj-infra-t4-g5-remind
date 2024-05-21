import mongoose from 'mongoose';

const PurchasePaymentRelationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Purchase',
    required: true
  },
  payment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
});

const PurchasePaymentRelation = mongoose.model('PurchasePaymentRelation', PurchasePaymentRelationSchema);
export default PurchasePaymentRelation;
