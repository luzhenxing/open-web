# open-web
---
### 技术选型
- yo webapp 构建框架
- gulp 编辑脚本
- bower 安装web库
- stylus 进行css处理
- requirejs 模块化管理
- bootstrap v3.3.5
- jquery v1.9.1
- modernizr v2.8.1
- art-template v4.1
### 安装步骤
**需要nodejs v4+**

```bash
# github中下载项目
git clone git@github.com:luzhenxing/open-web.git 

# 进入项目目录
cd open-web

# npm安装项目需要的包，此时根目录下会增加 node_modules 目录
npm install

# bower安装web端需要的js库，此时根目录下会增加 bower_components 目录
bower install
```
### 运行
```bash
# gulp编译压缩代码，生成dist目录
gulp

# 启动开发服务器，http://localhost:9000/
gulp serve

# 启动服务器，运行编译后的代码，http://localhost:9000/
gulp serve:dist
```
### 目录结构
> + app   # 开发目录，源码全部放在这里
>   - fonts   # 图标字体目录
>   - images  # 图标目录
>   - scripts # js目录
>   - styles  # stylus目录
> + bower_components    # 通过bower安装的库存在这里
> + dist      # 发布目录，通过gulp命令生成
> + node_modules    # npm安装生成的目录
> + test   # 测试目录
> + .babelrc    # babel配置，解析es6语法
> + .bowerrc    # bower配置
> + .editorconfig   # 编译规范
> + .gitignore      # git忽略文件
> + .yo-rc.json     # yo配置
> + gulpfile.js     # gulp脚本
> + package.json    # npm配置
> + README.md       # 项目描述文档
