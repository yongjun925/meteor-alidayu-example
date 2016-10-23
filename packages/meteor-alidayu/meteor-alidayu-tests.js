const alidayu = new Alidayu({
    appkey:'23489721',
    appsecret:'c1a438646d25a6a51978f6867f52b333'
});

Tinytest.add('alidayu.smsSend', function (test) {
    alidayu.smsSend({
        'extend':'123456',
        'sms_free_sign_name':'阿里大于',
        'sms_param':{
            code: '1234',
            product: 'alidayu'
        },
        'rec_num':'13000000000',
        'sms_template_code':'SMS_585014'
    }, function(error, response) {
        if (!error) console.log(response);
        else console.log(error);
    });
})