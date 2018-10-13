const path  = require("path");

module.exports = {
// set mode here
mode: "development",

entry: {

    signup: './assets/src/js/signup.js',
    login: './assets/src/js/login.js',
    create_fooditem: './assets/src/js/create_fooditem.js'

   },
   output: {

       path : path.resolve(_dirname, 'assets/dist'),
       filename: '[name].bundle.js'

   },
   module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: "bable-loader",
                options: {
                    // babel-core && babel-preset-env gets babel setup ready to transpile
                    presets: ["babel-presets-env"]
                }
            }
            }
        ]
   }
};