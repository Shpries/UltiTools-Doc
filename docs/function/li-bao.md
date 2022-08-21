# 礼包

UltiTools提供可以让你自定义想要送给/让玩家购买的礼品包。

礼包使用GUI页面，便于服主配置和玩家领取/购买，方便快捷。

允许设置是否可重复购买、付费购买、达到一定等级购买、某种职业购买（等级职业需要UltiLevel支持）。

## 效果图

![](/assets/礼包1.jpg)   ![](/assets/礼包2.jpg)

![](/assets/礼包编辑.png)


## 使用教程

### 指令列表

/kits 打开礼包GUI

/kits edit \[礼包代号\] 配置某个礼包的内容 （管理员指令）

### 添加新的礼包

打开文件Ultitools\kits.yml，在下方添加如下内容：

```yaml
testkit:
  item: GRASS_BLOCK
  reBuyable: false
  name: 新手礼包
  level: 1
  job: 全部
  description: 虽然是木头的，但是却很实用
  price: 0
  contain: []
  playerCommands: []
  consoleCommands: []
```

其中，testkit为自定义的礼包代号（配置礼包内容时需要，不可与其它礼包重复），任意英文单词均可；

GRASS\_BLOCK（草方块）为该礼包在礼包GUI中的显示材质，允许自定义；

contain为该礼包的内容，请勿在配置文件自行设置，详见下方“配置礼包内容”

reBuyable为该礼包是否可重复购买；name为该礼包的显示名；description为该礼包的描述lore；

price、level、job为购买该礼包所需的金币、等级和职业，若无此三项的限制，分别设置为“0、0、全部”即可；

playerCommands和consoleConmmands分别为购买礼包后执行的玩家命令与控制台指令，若无需执行指令，设置为\[\]即可。

若需要设置执行玩家指令，请按如下格式修改playerCommands项：

```yaml
playerCommands:
  - 第一条指令
  - 第二条指令
  - 如上根据个人需要设置即可
```

若需要设置执行控制台指令，按上方格式修改consoleCommands即可。

### 配置礼包内容

在添加了新的礼包后，请进入游戏，使用指令/kits edit \[礼包代号\] 打开礼包编辑GUI（如上方效果图所示）

按需放入礼包物品即可。

::: warning 注意

1. 请勿在配置文件通过contain自行设置礼包内容
2. 礼包显示材质（item项）必须使用Spigot标准物品名称，详见 [Spigot Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)

:::