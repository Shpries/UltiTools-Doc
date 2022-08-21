# 自定义文本

插件原本的文字提示不和你意？想要个性化服务器？

UltiTools允许自定义本插件的所有文本

## 效果图

![](/assets/自定文本2.png)

## 使用教程

进入文件夹Ultitools\lang，复制一份原版的语言文件，如zh.yml，并修改名称为任意英文，如下图所示

![](/assets/自定义语言.jpg)

接着在你复制的文件（此处为ck.yml）中修改文本信息，并保存

![](/assets/自定文本.png)

最后，打开文件Ultitools\config.yml，在第2-3行找到

```yaml
注释0请勿修改: '语言: zh_cn(简体中文), en_us(English)'
language: zh_cn
```

将\_后的英文修改为你复制出的语言文件的名字即可，此处为：将zh\_cn改为zh\_ck

保存后重启服务器即可应用自定义语言文件
