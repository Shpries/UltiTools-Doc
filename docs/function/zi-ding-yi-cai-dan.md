# 自定义菜单

不少玩家不知道指示令或者懒得打指令，自定义菜单是一个很好的解决方案；

虽然UltiTools不少功能都自带菜单，但是自定义菜单可以给你更自由的选择和个性化的定制。

UltiTools提供便利、实用的自定义菜单功能，

在菜单中，支持玩家身份执行指令、OP身份执行指令、花钱执行指令、菜单绑定物品等等。

## 效果图

![](/assets/自定义菜单1.jpg)
![](/assets/自定义菜单2.jpg)

## 使用教程

打开文件Ultitools\customgui.yml

### 编辑默认菜单

```yaml
# GUI主体设置
guis:
  # 配置一个界面
  main:
    # 界面大小
    size: 54
    # 界面标题
    title: 主菜单
    # 打开界面的命令（省略开头的ultitools，且只支持一个单词）
    command: gui
    # 打开此界面需要的权限（null为无需权限）
    premission: null
    #右击lore为以下配置的物品即可快捷打开菜单
    bind-lore: "§e右击打开菜单"


# 所有的main的按钮请都放在main下
main:
  # 示例按钮
  spawn:
    # 物品材质
    item: LOG
    # 物品位置(0-53取决于你的界面大小)
    position: 0
    # 显示名称
    name: 点击回到出生点
    # 物品的lore
    lore:
      - 在这里回到出生点
    # 玩家执行的命令
    player-commands:
      - spawn
    # 控制台执行的命令
    console-commands: []
    # 执行这个功能需要的金币数量
    price: 0
  suicide:
    # 物品材质
    item: PAPER
    # 物品位置
    position: 53
    # 显示名称
    name: 点击自杀
    # 物品的lore
    lore:
      - 自杀
    # 玩家执行的命令
    player-commands: []
    # 控制台执行的命令
    console-commands:
      - say {PLAYER} 自杀了！
      - kill {PLAYER}
    # 执行这个功能需要的金币数量
    price: 0
```

根据注释配置即可

### 新建菜单页面

在 ` guis ` 键下，用英文单词编写新的菜单名

其下方配置与参考main的页面配置即可，如下：

```yaml
guis:
  gui1:
    size: # 界面大小[9,18,27,36,45,54]
    title: # 界面标题
    command: # 打开界面的命令（省略开头的ultitools，且只支持一个单词）
    premission: # 打开此界面需要的权限（null为无需权限）
    bind-lore: #右击lore为以下配置的物品即可快捷打开菜单
  gui2:
    ...
  gui3:
    ...
```
::: info 配置项详解

size

- 类型: ` int ` (整数)
- 默认值: 无 (必填项)
- 说明: GUI界面的大小，也就是格子数，根据需要进行设置，受API限制， ` size ` 的值只能是 9 的倍数且不能超过 54

title

- 类型: ` string ` (字符串)
- 默认值: 无 (必填项)
- 说明: GUI界面标题，将显示在界面的左上角

command

- 类型: ` string ` (字符串)
- 默认值: 无 (必填项)
- 说明: 打开GUI界面的命令，填写 /ultitools \[gui\] 中的中括号内容，游戏内则使用 /ultitools gui 来打开这个界面， “gui” 字符可以是你自定义的内容

permission

- 类型: ` string ` (字符串)
- 默认值: 无 (必填项)
- 说明: 打开GUI界面所需的权限，填写 ` null ` 无需权限


bind-lore

- 类型: ` string ` (字符串)
- 默认值: 无 (可留空)
- 说明: GUI 绑定物品 lore，使用含有该 lore 内容的物品右击将打开此GUI

:::

### 配置新页面内容

在完成 [新建菜单页面](#新建菜单页面) 后，在该文件末尾编写新键，新键名为先前新建的菜单名

```yaml
gui:
  btn1:
    item: # Bukkit Material 标准物品名
    position: # 按钮位置 [0 - 界面大小-1]
    name: # 按钮显示名称
    lore:
      - # 按钮物品 lore
    player-commands:
      - # 以玩家身份执行命令，支持多个
    console-commands: [] # 以控制台身份执行命令，支持多个
    price: # 点击按钮所需的金钱
  btn2:
    ...
  btn3:
    ...
```
::: info 配置项详解

item

- 类型: ` string ` (字符串)
- 默认值: 无 (必填项)
- 说明: 按钮显示的物品，需按照 [Bukkit Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) 中的物品名称来填写

position

- 类型: ` int ` (整数)
- 默认值: 无 (必填项)
- 说明: 按钮所处的位置，0为第一格，1为第二格，以此类推，不能超过GUI界面大小

name

- 类型: ` string ` (字符串)
- 默认值: 无 (必填项)
- 说明: 按钮显示出来的名称

lore

- 类型: ` array ` (数组)
- 默认值: 无 (可留空)
- 说明: 按钮显示lore，支持多行

player-commands

- 类型: ` array ` (数组)
- 默认值: 无 (可留空)
- 说明: 点击按钮后以玩家身份执行的指令，支持多条

console-commands

- 类型: ` array ` (数组)
- 默认值: 无 (可留空)
- 说明: 点击按钮后以控制台身份执行的指令，支持多条

price

- 类型: ` int ` (整数)
- 默认值: 无 (必填项)
- 说明: 点击按钮后扣除玩家金钱的数量

:::

最终结构如下：

```yaml
guis:
  main:
    ... # main 菜单的页面配置
  test:
    ... # test 菜单的页面配置
main:
  ... # main 菜单的内容配置
test:
  ... # test 菜单的内容配置
```

若想创建更多菜单，以此类推即可

## 注意

打开自定义菜单时，需要使用完整指令/ultitools \[菜单指令\]

例如，main菜单的指令设置为gui，那么打开此菜单则需要使用指令/ultitools gui

您可以利用本插件的自定义指令简写或菜单绑定物品功能来简化此操作



