import { defineConfig } from 'vitepress'

export default defineConfig ({
    title: 'UltiTools 官方使用文档',
    description: 'UltiTools 官方使用文档',
    outDir: '../__book',
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wisdommen/UltiTools' }
        ],
        footer: {
            message: 'Released under the LGPL-3.0 License. ',
            copyright: 'Copyright © 2019-' + new Date().getFullYear()
        },
        nav: [
            { text: '指引', link: '/guide/', activeMatch:'/guide/'},
            { text: '功能', link: '/function/', activeMatch:'/function/' },
            { text: 'Ultikits主站', link: 'https://ultikits.com/' },
            {
                text: '5.2.1-Release',
                items: [
                    { text: '更新记录', link: 'https://github.com/wisdommen/UltiTools/releases' },
                    { text: '下一代 6.0.0', link: 'https://github.com/wisdommen/UltiTools/tree/6.0.0dev' }
                ]
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指引',
                    items: [
                        { text: '介绍', link: '/guide/' },
                        { text: '安装', link: '/guide/install' },
                        { text: 'Pro版本', link: '/guide/pro' },
                        { text: '自主排错', link: '/guide/troubleshoot' },
                    ]
                },
                {
                    text: '附录',
                    items: [
                        { text: '权限表', link: '/guide/permission' },
                        { text: '文字样式代码表', link: '/guide/color' },
                        { text: '物品名称表', link: 'https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html' },
                        { text: 'YAML语法快速上手', link: 'https://www.runoob.com/w3cnote/yaml-intro.html' },
                    ]
                }
            ],
            '/function/': [
                {
                    text: '总览',
                    items: [
                        { text: '功能大全', link: '/function/' },
                    ]
                },
                {
                    text: '公开功能',
                    items: [
                        { text: '白名单', link: '/function/bai-ming-dan' },
                        { text: '背包备份', link: '/function/bei-bao-bei-fen' },
                        { text: '侧边栏', link: '/function/ce-bian-lan' },
                        { text: '查看玩家背包/末影箱', link: '/function/cha-kan-wan-jia-bei-5305-mo-ying-xiang' },
                        { text: '地标', link: '/function/di-biao' },
                        { text: '多世界', link: '/function/duo-shi-jie' },
                        { text: '飞行', link: '/function/fei-xing' },
                        { text: 'GUI登录', link: '/function/guideng-lu' },
                        { text: '礼包', link: '/function/li-bao' },
                        { text: '聊天', link: '/function/cai-se-wen-zi-liao-tian' },
                        { text: '家', link: '/function/jia' },
                        { text: '快捷返回', link: '/function/kuai-jie-fan-hui' },
                        { text: '入服欢迎', link: '/function/ru-fu-huan-ying' },
                        { text: '设置行走/飞行速度', link: '/function/she-zhi-xing-8d70-fei-xing-su-du' },
                        { text: '死亡惩罚', link: '/function/si-wang-cheng-fa' },
                        { text: '随机传送', link: '/function/sui-ji-chuan-song' },
                        { text: '锁箱子', link: '/function/suo-xiang-zi' },
                        { text: '头顶显示', link: '/function/tou-ding-xian-shi' },
                        { text: 'TPA传送', link: '/function/tpa' },
                        { text: '玩家封禁', link: '/function/wan-jia-feng-jin' },
                        { text: '游戏模式切换', link: '/function/you-xi-mo-shi-qie-huan' },
                        { text: '邮箱', link: '/function/you-xiang' },
                        { text: '远程背包', link: '/function/yuan-cheng-bei-bao' },
                        { text: '治愈', link: '/function/zhi-yu' },
                        { text: '自定义文本', link: '/function/zi-ding-yi-suo-you-wen-ben' },
                        { text: '自定义指令别称', link: '/function/zi-ding-yi-zhi-ling-bie-cheng' },
                    ]
                },
                {
                    text: '付费功能',
                    items: [
                        { text: '找回密码', link: '/function/bang-ding-you-xiang-zhao-hui-mi-ma' },
                        { text: '同IP账号限制', link: '/function/dan-ge-ip-zhu-ce-shang-xian' },
                        { text: '玩家召回', link: '/function/wan-jia-zhao-hui' },
                        { text: '好友系统', link: '/function/guihao-you-xi-tong' },
                        { text: '玩家交易', link: '/function/guijiao-yi-xi-tong' },
                        { text: '智能聊天回复', link: '/function/zhi-neng-liao-tian-hui-fu' },
                        { text: '智能清道夫', link: '/function/zhi-neng-qing-dao-fu' },
                        { text: '自定义菜单', link: '/function/zi-ding-yi-cai-dan' },
                    ]
                }
            ],
        }
    }
})