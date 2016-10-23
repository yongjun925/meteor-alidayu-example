const TopClient = require('./topClient').TopClient;

Alidayu = class {
    constructor(options) {
        this.topClient = TopClient(options);
    }

    setConfig(options) {
        this.topClient = TopClient(options);
    }

    smsSend(data, callback) {
        if (!(data['sms_free_sign_name'] && data['rec_num'] && data['sms_template_code'] && data['sms_param'])) {
            return false
        }
        this.topClient.execute('alibaba.aliqin.fc.sms.num.send', _.extend({}, {
            'sms_type': 'normal',
            'sms_param': _.isString(data['sms_param']) ? data['sms_param'] : JSON.stringify(data['sms_param'])
        }, data), callback);
    }

    smsQuery(data, callback) {
        if (!(data['rec_num'] && data['query_date'] && data['current_page'] && data['page_size'])) {
            return false
        }
        this.topClient.execute('alibaba.aliqin.fc.sms.num.query', data, callback);
    }

    ttsSinglecall(data, callback) {
        if (!(data['tts_param'] && data['called_num'] && data['called_show_num'] && data['tts_code'])) {
            return false
        }
        this.topClient.execute('alibaba.aliqin.fc.tts.num.singlecall', _.extend({}, {
            'tts_param': _.isString(data['tts_param']) ? data['tts_param'] : JSON.stringify(data['tts_param'])
        }, data), callback);
    }

    voiceSinglecall(data, callback) {
        if (!(data['called_num'] && data['called_show_num'] && data['voice_code'])) {
            return false
        }
        this.topClient.execute('alibaba.aliqin.fc.voice.num.singlecall', data, callback);
    }

    voiceDoublecall(data, callback) {
        if (!(data['caller_num'] && data['caller_show_num'] && data['called_num'] && data['called_show_num'])) {
            return false
        }
        this.topClient.execute('alibaba.aliqin.fc.voice.num.doublecall', data, callback);
    }

    apiInterface(fc, data, callback){
        this.topClient.execute(fc, data, callback);
    }

}