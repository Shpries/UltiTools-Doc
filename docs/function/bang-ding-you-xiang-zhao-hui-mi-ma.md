# 找回密码

玩家密码忘了？数据文件里看不出来密码是多少，怎么办？

UltiTools提供绑定邮箱找回密码功能，只要玩家绑定了邮箱，即可通过邮箱验证重新设置密码。

该功能集成在登陆界面，优雅美观。

支持设置绑定成功后的奖励指令，配合recall指令，使玩家不易流失。

## 效果图

![](/assets/邮箱验证奖励.png)

![](/assets/找回密码1.jpg)![](/assets/找回密码2.jpg)

![](/assets/找回密码3.jpg)

---

## 使用教程

### 设置绑定后的奖励指令

打开文件UltiTools\login.yml，找到

```yaml
注释4请勿修改: 是否开启绑定邮箱后执行奖励指令
enable_emailregister_reward: true

注释5请勿修改: 绑定邮箱后的奖励指令，可多行
emailregister_reward_commands:
- givemoney %player% 500
```

将是否开启设为true，再在下方按格式编辑奖励指令即可（每行一条指令，%player%会在执行时变为完成绑定玩家的ID）

### 玩家游戏内绑定

/regs \[邮箱\] 绑定邮箱，获取验证码

/regs \[收到的验证码\] 验证邮箱



