#### 简述下html5的离线储存原理

h5的离线存储通过也在html标签设置一个 appcache 文件 来指定哪些文件需要被缓存，缓存之后，离线情况下，页面会从缓存文件中读取静态资源，以保证页面的正常展示。

```html

<html   manifest = "cache.manifest">
</html>
<!-- cache.manifest 文件必须和页面同一个目录下 -->

```

但是这种离线存储的方式很快就被从标准中取消， 建议使用 service worker 替代。

在离线缓存方面， service worker 功能更多，使用更方便，兼容性也更好， 是个更好的选择
