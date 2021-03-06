'use strict';

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: {
    type: Array,
  },
  user_id: {
    type: String
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret, options) {
      let userId = (options.user && options.user._id) || false;
      ret.editable = userId && userId.equals(doc._owner);
      return ret;
    },
  },
});



const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
