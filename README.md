
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# WCSD API

An API to store document metadata and allow users to have a cart and update it however they want.

---

## Links

The front-end is deployed here:<br>
https://bowers96.github.io/WCSD-Front-End/

The back-end is deployed here:<br>
https://secret-journey-84193.herokuapp.com

The front-end repo can be found here:<br>
https://github.com/Bowers96/WCSD-Front-End

The back-end deployed repo can be found here:<br>
https://github.com/Bowers96/WCSD-Back-End

---

## API end-points

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out/:id`        | `users#signout`   |
| GET    | `/carts`               | `carts#index`     |
| POST   | `/carts`               | `carts#create`    |
| PATCH  | `/carts/:id`           | `carts#update`    |
| DELETE | `/carts/:id`           | `carts#destroy`   |

---

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
