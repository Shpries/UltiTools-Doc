# 同IP账号限制

担心假人攻击？担心玩家开小号刷奖励？

UltiTools允许自定义同一个IP的注册数量上限。

## 效果图

![](/assets/ip上限.png)

## 使用教程

打开Ultitools\login.yml文件，在第3和11行找到

```yaml
playerLimitForOneIP: 5 #单个ip注册上限数量
```

```yaml
enablePlayerLimitForOneIP: true #是否启用限制单个ip注册数量
```

根据注释配置即可