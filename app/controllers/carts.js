'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Cart = models.cart;

const authenticate = require('./concerns/authenticate');
const setUser = require('./concerns/set-current-user');
const setModel = require('./concerns/set-mongoose-model');

const index = (req, res, next) => {
  Cart.find({
      user_id: req.user._id
    })
    .then(carts => res.json({
      carts: carts.map((e) =>
        e.toJSON({
          virtuals: true,
          user: req.user
        })),
    }))
    .catch(next);
};

const show = (req, res) => {
  res.json({
    cart: req.cart.toJSON({
      virtuals: true,
      user: req.user
    }),
  });
};





const create = (req, res, next) => {
  console.log(req.user._id)
  let cart = Object.assign({}, {
    _owner: req.user._id,
    user_id: req.user._id,
    items: ["cool"]
  });
  Cart.create(cart)
    .then(cart =>
      res.status(201)
      .json({
        cart: cart.toJSON({
          virtuals: true,
          user: req.user
        }),
      }))
    .catch(next);
};

const update = (req, res, next) => {
  delete req.body._owner; // disallow owner reassignment.
  console.log(req.body.cart)
  req.cart.update(req.body.cart)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const destroy = (req, res, next) => {
  req.cart.remove()
    .then(() => res.sendStatus(204))
    .catch(next);
};


module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, {
  before: [{
      method: setUser,
      only: ['index', 'show']
    },
    {
      method: authenticate,
      except: ['index', 'show']
    },
    {
      method: setModel(Cart),
      only: ['show', 'destroy']
    },
    {
      method: setModel(Cart, {
        forUser: true
      }),
      only: ['update', 'destroy']
    },
  ],
});
