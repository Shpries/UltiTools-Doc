# 自定义指令别称

指令难记？风格不一致？UltiTools提供自定义服务器所有插件指令别称的功能。

## 使用教程

打开文件Ultitools\command-alias.yml，找到

```yaml
#####格式#####
#原命令:
#  - 缩写
#  - 另一种缩写(可选)
#  - 同上
######示例#####
#lobby:
#  - l
#  - lb
#请确保你设置的命令别称与其它命令无冲突

lobby:
  - lb
```

按注释配置/修改默认配置即可

## 注意

请确保你自定义的指令别称与服务器内其它指令无冲突。



