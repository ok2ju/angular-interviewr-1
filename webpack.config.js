// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin  = require('copy-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
  title: 'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
  baseUrl: '/',
  host: 'localhost',
  port: 3007,
  ENV: ENV
};
/*
 * Config
 */
module.exports = {
  // static data for index.html
  metadata: metadata,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,
  // cache: false,

  // our angular app
  entry: { 'main': './app/src/app.js' },

  // Config for our build files
  output: {
    path: root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },


  resolve: {
    // ensure loader extensions match
    extensions: prepend(['.js','.json','.css','.html'], '.async') // ensure .async.ts etc also works
  },

  module: {
    preLoaders: [
      //{ test: /\.js$/, loader: "source-map-loader"},

    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['ng-annotate', 'babel'], // 'babel-loader' is also a legal name to reference
        /*query: {
          presets: ['es2015']
        }*/
      },
      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        loader: 'file?name=/assets/fonts/[name].[ext]?[hash]'
      },

      { test: /\.scss$/,  loader: ExtractTextPlugin.extract(["css?sourceMap", "resolve-url", "sass?sourceMap"])},

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },

      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      }

      // if you add a loader include the resolve file extension above
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),

     new ExtractTextPlugin("assets/css/styles.css"),
    //new webpack.optimize.CommonsChunkPlugin({}),
    // static assets
    new CopyWebpackPlugin([ { from: 'app/assets', to: 'assets' }, { from: 'app/src/**/*.html', to: 'assets' } ]),
    // generating html
    new HtmlWebpackPlugin({ template: 'app/index.html', inject: false }),
    // replace
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV)
      }
    }),

    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ],

  // our Webpack Development Server config
  devServer: {
    port: metadata.port,
    host: metadata.host,
    // contentBase: 'src/',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    https: true,
    contentBase: './dist',
    publicPath: '/dist',
  },
  // we need this due to problems with es6-shim
  //node: {global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false}
};

// Helper functions

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function prepend(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val
    }));
  }, ['']);
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
