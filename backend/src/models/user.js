const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// user model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Password hashing before save
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12); // password hashing with salting value of 12
  next();
});

module.exports = mongoose.model('User', UserSchema);