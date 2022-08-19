# 头顶显示

UltiTools允许自定义玩家头顶名称的前后缀

## 效果图

![](/assets/头顶显示.png)

## 使用教程

打开Ultitools\config.yml文件，在第88行至91行找到如下配置项

```yaml
注释42请勿修改: (头衔) 自定义头顶显示前缀
name_prefix: §e[§dLv.%player_level%§e]
注释44请勿修改: (头衔) 自定义头顶显示后缀
name_suffix: §e[§c%player_health_rounded%§e/§c%player_max_health_rounded%§e]
```

按注释及需求配置即可

## 注意

名字前缀name\_prefix的设置不可过长，否则会导致插件报错

