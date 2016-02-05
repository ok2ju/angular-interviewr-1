// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const url = require('url');
const fs = require('fs');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const metadata = {
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
    extensions: prepend(['.js', '.json', '.css', '.html'], '.async')
  },

  module: {
    preLoaders: [
      //{ test: /\.js$/, loader: 'source-map-loader'},

    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['ng-annotate', 'babel']
      },
      // Support for *.json files.
      { test: /\.json$/, loader: 'json-loader' },

      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        loader: 'file?name=/assets/fonts/[name].[ext]?[hash]'
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'resolve-url', 'sass?sourceMap'])
      },

      // Support for CSS as raw text
      { test: /\.css$/, loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/, loader: 'raw-loader' },

      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=/assets/images/img-[hash:6].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),

    new ExtractTextPlugin('assets/css/styles.css'),
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
      port: 4000,
      ghostMode: false,
      notify: false,
      online: false,
      injectChanges: false,

      server: {
        baseDir: ['dist'],
        middleware(req, res, next) {
          const urlObject = url.parse(req.url);
          const d = __dirname.split('\\').join('/');
          const fileName = d + '/dist' + urlObject.href.split(urlObject.search).join('');
          console.log(fileName);
          const fileExists = fs.existsSync(fileName);
          if(!fileExists && fileName.indexOf('browser-sync-client') < 0) {
            req.url = '/';
          }
          return next();
        }
      }
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
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
