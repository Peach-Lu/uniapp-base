# 1.常规开发目录
### ├── api             // 统一接口目录
### │   └── user.js     // 用户接口 (按功能分组)
### ├── components      // 公共组件目录
### ├── filters         // 过滤器封装目录
### ├── pages           // 所有的主包页面存放目录
### │   ├── index
### │   │   └── index.vue
### │   ├── login      
### │   │   ├── login.vue   
### │   │   └── register    
### ├── static          // 静态资源 (css/js/图片/声音等等)
### │   ├── images
### │   │   ├── category.png
### ├── store           // vuex缓存
### │   └── index.js
### └── utils           // 工具目录
###     └── http.js  // http请求库
###     └── utils.js  // 封装函数
### ├── config.js        // 配置文件。
### ├── App.vue         // 是我们的根组件，所有页面都是在App.vue下进行切换的，是页面入口文件，可以调用应用的生命周期函数。
### ├── main.js         // 是我们的项目入口文件，主要作用是初始化vue实例并使用需要的插件。
### ├── manifest.json   // uniapp配置文件,是应用的配置文件，用于指定应用的名称、图标、权限等。
### ├── pages.json      // 页面配置,用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等
### ├── uni.scss        // 公共样式,是为了方便整体控制应用的风格。比如按钮颜色、边框风格， uni.scss文件里预置了一批scss变量预置。
### ├── 开发须知.md     // 自述文件



# 2.文件夹命名规范
### 搜索: search.vue
### 购物车: confirm-order.vue
### 有些页面文件名和位置必须固定

### 举个栗子: 创建有关商品(goods)的页面
###	列表页: pages/goods/list.vue
###	详情页: pages/goods/detail.vue
### 多个单词全小写 使用中划线分割 : confirm-order.vue

# 3.代码命名规范
## 命名: 驼峰命名, 首字母小写. 必须有意义
### 页面列表：List为后缀，如goodsList
### 页面详情：Details为后缀，如goodsDetails
### 页面状态值: 必须是bool类型, is作为前缀. 如: isShow
## 方法命名
### 跳转页面: to+目录名/页面名 toGoodsDetail(), toMy()
### 获取方法: get+变量名 getGoodsList()
### 更新方法: up+变量名 upIsShow()
### 提交方法: submit前缀 submitOrderData	(防快速点击: 提交数据需要做防止快速重复点击, 以3秒为例. 防止重复向服务器发送数据)

# 4.公共配置
### 所有用到地址以及配置, 都必须从config.js中获取
### 所有过滤器必须封装在filters/index.js中
### 所有封装的公共函数放在utils/utils.js中
### 所有的API请求必须封装在api目录中

# 5.注意
### 一个方法内不要有多个功能,有多个功能必须要拆分成多个函数来调用# uniapp-base
