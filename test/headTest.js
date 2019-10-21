// import functions
const assertEqual = require('../assertEqual');
const head = require('../head');

// test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6]), 5);
assertEqual(head([]), 5);