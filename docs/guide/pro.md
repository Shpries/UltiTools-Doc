# Pro版本

UltiTools的部分功能是需要付费的，如果需要，请激活插件的Pro版本

## 激活教程

前往 [UltiKits用户面板](https://panel.ultikits.com/auth/register) 注册一个新账号

注册登录完毕后前往 [”会员“页面](https://panel.ultikits.com/dashboard/pro) 购买Pro会员

::: tip

UltiKits 同时支持微信支付和支付宝支付，如果您需要其他支付方式，请联系群主

:::

购买完毕后，前往 [”服务器“页面](https://panel.ultikits.com/dashboard/server) 添加服务器

填写服务器的名称、UUID和IP地址(可选)

服务器 UUID 位于服务器根目录下的 `/plugins/UltiCore/data.yml`

添加服务器后点击右侧的按钮激活服务器

在 UltiTools 的主配置文件 `/plugins/UltiTools/config.yml` 中填写你的账号信息

```yaml
注释52请勿修改: 是否开启PRO版本
enable_pro: true
注释53请勿修改: PRO版本注册账号名称
pro_name: username
注释54请勿修改: PRO版本注册账号密码
pro_password: password
```

重启服务器即可