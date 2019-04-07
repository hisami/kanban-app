const bodyParser = require('body-parser')

module.exports = app => {
  // HTTPリクエストのbodyの内容をJSONとして解析するようにミドルウェアをインストール
  app.use(bodyParser.json())
}
