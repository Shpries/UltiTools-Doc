# 入服欢迎

优秀的入服欢迎可以提升玩家对于服务器的好感度，UltiTools可以自动发送新玩家入服欢迎通知，并且允许自定义玩家进入游戏后及离开游戏后的信息。

## 效果图

![](/assets/入服欢迎.jpg)   ![](/assets/新玩家入服欢迎.png)![](/assets/玩家上下线提示.png)

## 使用教程

打开Ultitools\joinwelcome.yml文件

```yaml
# 配置文件版本，请勿修改
config_version: 1.0

# x秒后发送入服欢迎
sendMessageDelay: 4

# 入服欢迎语
welcome_message:
  - §b欢迎加入服务器，§e%player_name%§b!
  - §b请友善对待他人，游戏愉快！

# op入服提示语
op_join: §c[管理员] §e%player_name% §c已上线

# op下线提示语
op_quit: §c[管理员] §e%player_name% §c已下线

# 玩家入服提示语
player_join: §c[玩家] §e%player_name% §c已上线

# 玩家下线提示语
player_quit: §c[玩家] §e%player_name% §c已下线
```

按注释配置即可

