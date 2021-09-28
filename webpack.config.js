const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'), // 项目总入口js文件
  // 输出文件
  output: {
    path: path.join(__dirname, 'dist'), // 所有的文件都输出到dist/目录下
    filename: 'bundle.js',
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
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // 最新版的vue-loader需要配置插件
  ],
}
