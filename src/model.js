import mongoose from 'mongoose';

/**
 * Initialize constant with an array of strings.
 * Loop through each item in the array and print
 * it to the console.
 */ 
const { Schema } = mongoose;
const accountSchema = new Schema({
  accountnumber: {
    type: String,
    required: true,
    unique: true,
  },
  identitynumber: {
    type: String,
    required: true,
  },
  accountbalance: {
    type: String,
    required: true,
  }
});

export default mongoose.model('User', accountSchema);
