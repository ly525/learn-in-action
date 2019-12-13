## Learn Browser Cache with Express.js
> 借助 Express.js 学习浏览器缓存相关知识点

### 主要尝试通过实践的形式回答以下问题
> 这个项目主要是 我自己 用来学习 浏览器缓存相关知识的，一下想不到那么多的问题，会慢慢补充

> 欢迎在 issue 中补充问题，一起交流

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

### FAQ

为何不用 nginx
> nginx 当然可以达到类似的效果，使用场景更加宽泛但我不是很熟悉，因此就不献丑了

为何选用 Express.js
> 快速上手、简单、改动代码之后，借助 nodemon，代码写完就可以 hot restart，不用手动重启。减少了一些成本，可以更多地关注这个项目的本身目的
