// 核心入口，主要关注 serve-static 中的相关 header 的具体实践

var express = require('express')
var path = require('path')

// 此模块是 express 的依赖项
var serveStatic = require('serve-static')
var logger = require('morgan');

var app = express()
app.use(logger('dev'));


app.use(serveStatic(path.join(__dirname, 'public'), {
  maxAge: 360 * 1000,
  setHeaders: setCustomCacheControl
}))


function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=360000')
  }
}

module.exports = app