> **厌倦了在进入服务器后匆匆忙忙用指令输入密码的情况？**
>
> **担心玩家利用指令干坏事？**

# UltiTools使用GUI登录系统

简单的注册，简单的登录，不一般的高效。

---

在注册或登录前，玩家除了点击GUI内容没有的别的任何输入，无法移动，无法输入命令，无法干其它任何事情。

## 效果图：

![](/assets/注册界面.png)

![](/assets/注册消息.png)

### ![](/assets/登录界面.png)

![](/assets/登录信息.png)

---

* ## 支持设置定点登录，支持设置单个ip注册上限

### 效果图

![](/assets/ip上限.png)

### 设置方法

打开Ultitools\login.yml文件

```yaml
# 配置文件版本，请勿修改
configVersion: 1.1
playerLimitForOneIP: 5 #单个ip注册上限数量
enableFixPointLogin: false #是否启用定点登录
loginPoint:
  world: World
  x: 100
  y: 70
  z: 60
config_version: 1.2
enablePlayerLimitForOneIP: true #是否启用限制单个ip注册数量
ip:
```

* ## **支持MySQL数据存储**

### 设置方法

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

* ## **支持绑定邮箱修改密码（付费功能）**

**详见“付费功能”**

