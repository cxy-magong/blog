# 介绍
[博客地址](https://magong.site)

hexo them: [oranges](https://github.com/zchengsite/hexo-theme-oranges)


# 使用方法
```shell
hexo new "your article name"

# 清理缓存
hexo clean
# 生成静态网页
hexo generate
# 开启网站
hexo server -p 80
```


# git
```
git push github
git submodule foreach git push
```

## 文章短连接

```shell
# 安装 abbrlink
npm install hexo-abbrlink --save
# 生成短链接
hexo generate
```



## 添加博客描述

`_config.oranges.yml` 字段 avatar 中新增 describe

在 `themes\oranges\layout\_partial\navigation.ejs`中添加元素

```
      <% if (theme.avatar.describe){%>
        <p  class="describe"><%- theme.avatar.describe %></p>
      <% }%>
```

当 `describe`为空时，不加载这个元素，不为空时，加载元素

重新生成网页：`hexo generate`



## 修改图标

**下载图标库**

1. 图标库：[iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)
2. 将图标加入购物车 - 在购物车添加至项目 - 网页顶部`资源管理`查看自己的项目
3. 修改图标名称（可选） 
4. 下载到本地



**引入图标库**

1. 解压压缩包，打开demo.html可以看到图标库的3中引用方式，我用的是 `symbol`方式，可以修改颜色

2. `iconfont.js`拷贝到`themes\oranges\source\js`目录中 

3. 打开 `themes\oranges\layout\_partial\header.ejs`引入图标库`iconfont.js`

   ```JavaScript
     <script src="/js/iconfont.js"></script>
     <style>
       .icon {
         width: 1.5em;
         height: 1.5em;
         vertical-align: -0.15em;
         fill: currentColor;
         overflow: hidden;
       }
   </style>
   ```

4. 选择要将图标应用的页面，例如我选择修改页脚的图标：`themes\oranges\layout\_partial\footer.ejs`

   ```html
         <% for(let item of theme.footer.social){ %>
           <li>
             <a title="<%- item.name %>" href="<%- item.path %>">
               <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-<%- item.icon %>"></use>
               </svg>
             </a>
           </li>
         <% } %>
   
   ```

5. 在 `_config.oranges.yml`中将 footer-social - icon 改成图标库的类名。（类名在你下载的图标代码`demo.html`中可以预览）



