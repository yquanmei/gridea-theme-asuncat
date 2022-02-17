## 预览
预览：https://yquanmei.github.io

## 使用
- 打开Gridea编辑器，点击设置，查找站点源文件路径
- 下载该代码文件，放入站点源文件路径下的themes
- Gridea编辑器设置：主题-基础设置，选择主题：Asuncat，保存

## 开发
```
$ yarn install
$ yarn run dev

```

`/assets`、`/templates` 必须，Gridea 使用主题时必须文件夹  
`config.json` 可选，主题信息和自定义配置字段信息  
`style-override.js` 可选，根据自定义配置信息生成 css 方法文件  
`/images` 文件夹仅为预览渲染 avatar 所用  


Gridea 主题开发支持 less，若不熟悉 less 语法，尽可使用 css 语法编写，只不过文件名需要保持 `main.less`


😘 Enjoy~
