
---

> 所有内容均可自定义，支持papi变量，可以开关底部耐久显示

---

# 效果图

![](/assets/侧边栏.png)

---

# 使用教程

打开Ultitools\sidebar\config.yml文件

配置以下内容

```yaml
# 侧边栏标题
scoreBoardTitle: 欢迎加入服务器
```

```yaml
# 自定义内容
customerline:
  - 这是自定义的内容
  - 可以在配置文件里改
  - 支持PAPI变量
```

其余填写变量的位置，如

```yaml
# 玩家名变量
name: '%player_name%'

# 在线人数变量
online_player: ''
```

若需启用，填入相关变量即可，若不需启用，设置为 '' 即可\(参照默认）

