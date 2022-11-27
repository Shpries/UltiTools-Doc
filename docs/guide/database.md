# 使用MySQL数据库

UltiTools支持使用MySQL数据库储存玩家数据，群组服务器建议使用该方式以确保数据同步

## 连接数据库

::: tip
如之前是使用YAML文件储存数据，更改为数据库储存后插件会自动将数据迁移到数据库
:::

打开 ` config.yml ` 文件，在大约10-21行找到以下内容

```yaml
注释1请勿修改: 设置true为使用mysql数据库，设置false为使用yml储存数据
enableDataBase: false
注释2请勿修改: 填写你的Host, 默认为Localhost
host: localhost
注释3请勿修改: 填写你的Mysql端口, 默认为3306
port: 3306
注释4请勿修改: 填写你的用户名，默认为root
username: root
注释5请勿修改: 填写你的密码
password: root
注释6请勿修改: 填写你需要连接的数据库
database: minecraft
```

按照注释提示修改即可

::: warning
UltiTools 6 起支持自定义数据库URL，UltiTools 5 只能填写Host
:::