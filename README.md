# tree-shake-test

A Toy example of tree shaking for different types of exports

Each type has an add and a subtract method which returns the type name and addition/subtraction of the method

in index.ts we use all the addition methods and none of the subtraction methods

/dist/bundle.js is the tree shaken result
