meteor alidayu
=========================

sms_send 短信发送
sms_query 短信发送记录查询
tts_singlecall 文本转语音通知
voice_singlecall 语音通知
voice_doublecall 多方通话

## Installation

In your Meteor app directory, enter:

```
$ meteor add yongjun:meteor-alidayu
```

## How to use?

```
const alidayu = new Alidayu(
  {
      appkey: '',
      appsecret: ''
  }
);
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
```

Options:
    https://api.alidayu.com/docs/api.htm?apiId=25450