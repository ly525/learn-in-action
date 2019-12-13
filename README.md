## Learn Browser Cache with Express.js
> 借助 Express.js 学习浏览器缓存相关知识点

### 主要尝试通过实践的形式回答以下问题

#### 1. 304 何时出现？
> 与 Last-Modified、If-Modified-Since 是何含义？
> 与 304 之间有何关系？

### Dev
> 项目是通过 express-generator 生成的，参照 express 官方文档，做了一些修改，[参考文档](https://expressjs.com/en/resources/middleware/serve-static.html)

```bash
npm i
npm run start

# localhost:3000/stylesheets/style.css
# 观察 request header 和 response header
```