import mongoose from 'mongoose';


const { Schema } = mongoose;
const accountSchema = new Schema({
  accountnumber: {
    type: String,
    required: true,
  },
  identitynumber: {
    type: String,
    required: true,
  },
  accountbalance: {
    type: String,
    required: true,
    unique: true,
  }
});

export default mongoose.model('User', accountSchema);
