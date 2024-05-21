import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const PurchaseSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  termsAccepted: {
    type: Boolean,
    required: true
  },
  selectedPlan: {
    type: Object,
    required: true
  }
});

// Middleware para criptografar a senha antes de salvar
PurchaseSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);
export default Purchase;
