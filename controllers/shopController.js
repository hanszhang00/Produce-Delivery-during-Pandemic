/**
 * This controller class handles all of the product logics
 */

// Imports
const Product = require("../models/product");

// Display the product page with all the products added
exports.getDisplayProductPage = (req, res, next) => {
  console.log("display product page");
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
      hasProducts: products.length > 0,
    });
  });
};

// Display the original index page
exports.getDisplayIndexPage = (req, res, next) => {
  console.log("display index page");
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

// Display the cart page
exports.getDisplayCartPage = (req, res, next) => {
  console.log("display cart page");
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
};

// Display the orders page
exports.getDisplayOrdersPage = (req, res, next) => {
  console.log("display prders page");
  Product.fetchAll((products) => {
    res.render("shop/orders", {
      prods: products,
      pageTitle: "Orders",
      path: "/orders",
    });
  });
};

// Display the checkout page
exports.getDisplayCheckoutPage = (req, res, next) => {
  console.log("display checkout page");
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};