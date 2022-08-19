module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.3.9:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'myvuemeituan',   //七牛云bucket
    AccessKey: '7fyrd9Zl6Wje4Il5xxjLA-CrxlHepPMWNehgl6in',   //七牛云accessKey
    SecretKey: 'UrHVsmDAC685P8KCgyc6XeUMfGdfvlBu5F2htzNx',    //七牛云secretKey
    tencentkey: 'LICBZ-FXJ6Q-Q3N5J-GL57K-NAGOV-32BKX',        //腾讯位置secreKey
    tencentkey2: 'LICBZ-FXJ6Q-Q3N5J-GL57K-NAGOV-32BKX',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


