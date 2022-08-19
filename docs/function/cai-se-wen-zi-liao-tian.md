# 聊天

UltiTools允许自定义聊天前缀，可以使用颜色代码和PAPI变量，并且允许拥有相关权限的玩家使用彩色文字聊天。

同时，UltiTools提供聊天@功能，被at的玩家会被醒目的方式提醒

支持空格后Tab补全名字，无视ID大小写，任意位置at，文字高亮，at多个人，at全体（@所有人）。

## 效果图

![](/assets/聊天前缀.jpg)

![](/assets/彩色聊天.png)![](/assets/艾特列表.png)![](/assets/艾特提示.png)![](/assets/艾特消息.png)![](/assets/被艾特消息.png)

## 使用教程

### 权限列表

ultikits.tools.chatcolor 允许玩家在聊天中使用&颜色代码来发送彩色文本消息

### 配置聊天前缀

打开Ultitools\chat.yml，在第3-4行找到

```yaml
# 聊天前缀
chat_prefix: '§e[§a%player_world%§e][§c%ul_job%§dLv.%ul_level%§e][§b%player_name%§e]'
```

根据需要配置即可

### @功能

在聊天框中加入@ 玩家名，发送即可at玩家；发送 @所有人 即可@全体。

@与玩家名中可加空格也可不加。若在@后输入空格再按TAB键即可自动补全玩家名。

### 彩色文字聊天

在聊天信息前加入&颜色代码即可



