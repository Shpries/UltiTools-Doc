# 家

支持设置多个家，自定义家的名字（支持中文），传送至指定的家，通过权限设置玩家所能设置家的最大数量

# 效果图

![](/assets/家列表.png)

## 使用教程

### 指令列表

/homelist 打开家列表

/sethome \[家名 \] 设置名为\[家名\]的家

/home \[家名\] 回到名为\[家名\]的家

/delhome \[家名\] 删除名为\[家名\]的家

### 设置玩家家的上限

打开Ultitools\home.yml文件

```yaml
# 配置文件版本，请勿修改
config_version: 1.0

# 普通玩家可以设置的最大家数量
home_normal: 3

# 中级玩家可以设置的最大家数量，权限：ultikits.tools.level1
home_pro: 5

# 高级玩家可以设置的最大家数量，权限：ultikits.tools.level2
home_ultimate: 10

# 家传送前摇
home_tpwait: 3
```

按注释配置即可

::: warning 注意

若在设置家时未指定家名，将会自动设置家名为“默认”，若玩家第二次设置时仍未指定家名，则会导致第一次设置的家被覆盖

请务必提醒你的玩家在设置家时指定家名

:::