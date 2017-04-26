// this fil isn't transpiled, so use commonjs and es5

// register babel to transpile before our tests run.
require ('babel-register')();

//disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};

