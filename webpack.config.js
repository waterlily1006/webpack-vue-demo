const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'), // 项目总入口js文件
  // 输出文件
  output: {
    path: path.join(__dirname, 'dist'), // 所有的文件都输出到dist/目录下
    filename: 'bundle.[hash:8].js', // 输出文件的名称加上hash值
  },
  module: {
    rules: [
      {
        // 使用vue-loader解析.vue文件
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        // 要加上style-loader才能正确解析.vue文件里的<style>标签内容
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|jpg|png|jpeg|pg|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'dist/asset/images/[name]-[has:5].[ext]',
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // 最新版的vue-loader需要配置插件
    new HtmlWebpackPlugin({
      filename: 'index.html', // 生成的文件名称
      template: 'index.html', // 指定用index.html做模版
      inject: 'body', // 指定插入的<script>标签在body底部
    }),
  ],
}
