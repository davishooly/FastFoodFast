const path  = require("path");

module.exports = {
// set mode here
mode: "development",
entry: {
    signup: './src/signup.js',
    login: './src/login.js',
    create_fooditem: './src/create_fooditem.js',
    all_fooditems: './src/all_fooditems.js'


   },
   output: {

       path : path.resolve(__dirname, 'public/dist'),
       filename: '[name].bundle.js'

   },
   module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader",
                options: {
                    // babel-core && babel-preset-env gets babel setup ready to transpile
                    presets: ["@babel/preset-env"   ]
                }
            }
            }
        ]
   }
};