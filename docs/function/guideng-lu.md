# GUI登录

厌倦了进入服务器后匆匆忙忙用指令输入密码的情况？担心玩家利用指令干坏事？

UltiTools提供GUI登录系统，简单的注册，简单的登录，不一般的高效。

在注册或登录前，玩家除了点击GUI内容，无法移动，无法输入命令，无法干其它任何事情。

支持设置定点登录，支持连接MySQL数据库，管理员重置玩家密码；

支持设置单个ip注册上限，支持绑定邮箱修改密码 （付费功能）。

## 效果图

![](/assets/注册界面.png)

![](/assets/注册消息.png)

![](/assets/登录界面.png)

![](/assets/登录信息.png)

![](/assets/密码重置.png)

## 使用教程

### 设置定点登录

打开Ultitools\login.yml文件，在第4-9行找到

```yaml
enableFixPointLogin: false #是否启用定点登录
loginPoint:
  world: World
  x: 100
  y: 70
  z: 60
```

根据注释修改即可

### 连接MySQL数据库

打开Ultitools\config.yml文件，在12-21行找到如下代码

```yaml
注释1请勿修改: 设置true为使用mysql数据库，设置false为使用yml储存数据
enableDataBase: false
注释2请勿修改: 填写你的Host, 默认为Localhost
host: localhost
注释3请勿修改: 填写你的Mysql端口, 默认为3306
port: 3306
注释4请勿修改: 填写你的用户名，默认为root
username: root
注释5请勿修改: 填写你的密码
password: root
注释6请勿修改: 填写你需要连接的数据库
database: minecraft
```

按注释修改配置即可

### 管理员重置玩家密码

/password reset \[玩家\] 重置\[玩家\]的密码

::: info

与登录相关的绑定邮箱找回密码和同ip注册上限为付费功能

详见左侧“付费功能”

:::