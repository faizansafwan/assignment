const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
 * User Schema
 * 
 * @typedef {Object} User
 * @property {String} name - Full name of the user (required)
 * @property {String} email - Unique email address for login (required)
 * @property {String} password - Hashed user password (required)
 */
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

/**
 * Middleware that hashes the password before saving the user.
 * Only runs if the password field has been modified.
 */
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  // Hash the password with a salt round of 12
  this.password = await bcrypt.hash(this.password, 12); 
  next();
});

module.exports = mongoose.model('User', UserSchema);