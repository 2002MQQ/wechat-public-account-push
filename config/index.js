export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx7f8f429d93019ed8",

    // 公众号APP_SECRET
    APP_SECRET: "7f0659a272ca6ca9b590d969548807fb",

    // 模板消息id
    TEMPLATE_ID: "PnT6W5LpaEijWHUnAOPKQO1TkMZDFxb3h6OSAnxTmH0",

    
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    // [{
    //   name: "张三",
    //   id: "wxafasdasdd-zxfvsdfd"
    // },
    // {
    //   name: "李四",
    //   id: "wxafasdasdd-zxfvsdfd"
    // }]
    USERS: [
      {name: '宝贝', id: "o-dME5zgD2AlD7QDT3fykX--0VX4"}, 
      {name: '宝贝', id: "o-dME5y9Hfr-zxc6aIzfQbJLl0KI"}, 
      {name: '宝贝', id: "o-dME5xIR87fz_H53y9YiD5EApfc"}, 
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '乔',id: "o-dME5xIR87fz_H53y9YiD5EApfc"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "陕西",
    // 所在城市
    CITY: "礼泉",

    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

   {{date.DATA}}
地区:{{region.DATA}}
天气:{{weather.DATA}}
当前气温:{{temp.DATA}}
最低气温:{{min_temp.DATA}}
最高气温:{{max_temp.DATA}}
当前风向:{{wind_dir.DATA}}
空气质量:{{category.DATA}}
日出时间:{{sunrise.DATA}}
日落时间:{{sunset.DATA}}

{{note_en.DATA}}
{{note_ch.DATA}}


// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
