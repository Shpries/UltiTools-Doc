
---

> **服务器开启了物品不掉落，玩家都一个个天不怕地不怕？失去了原版的紧张刺激怎么行？**
>
> **UltiTools提供死亡惩罚，可设置掉落金币，随机掉落物品，支持死亡执行后台指令，支持选择世界开启金币或者物品掉落。**

---

# 效果图

![](/assets/死亡惩罚.jpg)

---

# 使用教程

打开文件Ultitools\death.yml

```yaml
# 配置文件版本，请勿修改
config_version: 1.0

# 是否开启物品掉落
enable_item_drop: false

# 是否开启金币掉落
enable_money_drop: true

# 是否开启死亡执行后台命令
enable_punish_commands: true

# 死亡后掉落的金币数
money_dropped_ondeath: 100

# 死亡后随机掉落的物品数
item_dropped_ondeath: 3

# 死亡后后台执行的指令（{PLAYER}指代玩家占位符）
punish_command: []

# 开启死亡随机物品掉落的世界
worlds_enabled_item_drop:
  - world
  - world_nether
  - world_the_end

# 开启死亡后金币掉落的世界
worlds_enabled_money_drop:
  - world
  - world_nether
  - world_the_end

# 开启死亡后执行后台指令的世界
worlds_enabled_punish_commands:
  - world
  - world_nether
  - world_the_end
```

按注释修改配置即可

