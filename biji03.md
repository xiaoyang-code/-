### 内容回顾

注册功能  

1.创建一个注册页面 组件。

2.配置注册页路由  

3.页面排版

4.完成注册功能

* 图片验证码
  * 接口  https://api.it120.cc/small4/verification/pic/get?key="随机数"
  * 点击图片里面的字符发生改变  修改接口后面的key参数的值 
* 短信验证码
  * 接口 https://api.it120.cc/small4/verification/sms/get
  * 参数  mobile 手机号  key 图形验证码的key参数  picCode 图形验证码
* 提交注册数据
  * 接口  https://api.it120.cc/small4/user/m/register   post
  * 参数  mobile 手机号  密码 pwd  code 短信验证码
  * post的时候 参数需要 qs模块转换一下

登录功能    

1.创建一个登录页 组件  

2.配置登录页路由

3.完成登录排版

4.登录功能完成

* 接口  post https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey
* 必填参数   mobile  手机号   密码  pwd
* 发起axios 的post请求     
* 根据请求响应回来的数据判断 进行下一步操作  登陆成功  保存token 跳转到个人中西页  登录失败  提示用户继续登录





分类功能

1.创建分类页面 组件   

2.配置分类页的路由 

3.完成分类页的布局  

4.请求接口  把数据请求回来 渲染到页面    https://api.it120.cc/small4/shop/goods/category/all    post   get  





