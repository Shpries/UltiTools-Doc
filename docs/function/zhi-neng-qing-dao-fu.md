# 智能清道夫

UltiTools提供高版本的服务器智能清理功能，包含闲置区块卸载，同时允许自定义清道夫的名字。

可根据以下条件进行清理：最大生物数量，最大掉落物数量，最大实体数量（生物数量+掉落物数量），精确到清理某个世界，某种类别（生物，掉落物，实体）；

你也可以查看目前服务器内实体的数量，手动控制进行清理，并且也支持传统的定时清理；

智能清道夫不会清理已经被驯化的生物，也不会清理被命名的实体、浮空文字等。

## 效果图

![](/assets/清理1.jpg)

![](/assets/清理2.jpg)

![](/assets/清理3.jpg)

## 使用教程

打开文件Ultitools\cleaner.yml

```yaml
# 配置文件版本，请勿修改
config_version: 1.2

# 清道夫名称
cleaner_name: 扫地娘

# 开关定时清理（智能清理开启时不生效）
clean_entity_task_enable: false

# 开关卸载闲置区块
unload_chunk_task_enable: false

# 开关智能清理
enable_smart_clean: true

# 定时清理间隔
clean_period: 3000

#需要清理的种类（all代表全部，items代表掉落物，mobs代表生物）
clean_type:
  - all

# 需要清理的世界（all代表全部）
clean_worlds:
  - all

#智能清理，掉落物上限
item_max: 2000

#智能清理，生物上限
mob_max: 1000

#智能清理，实体上限
total_entity_max: 2500

# 一个区域被视为闲置区域的最大距离
max_chunk_distance: 320

# 智能清理，区块上限
max_unused_chunks: 100

# 每分钟最大卸载区块量
unload_chunks_per_minute: 10

# 生物白名单，不会被清理
clean_whitelist: []
```

根据注释配置即可

生物白名单的编写格式及标准名称请参考 公开功能-礼包 下方内容

