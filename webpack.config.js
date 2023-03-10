module.exports = {
    entry: ["./client/index.js"],
    output: {
      path: __dirname,
      filename: "./public/bundle.js",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
            options: {
              attrs: [":src"]
            }
          }
        },
        {
          test: /\.(mp4|svg|png|jpe?g|gif|mov)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]"
            }
          }
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: () => [
                    require('autoprefixer')
                  ]
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ],
    },
  };
  