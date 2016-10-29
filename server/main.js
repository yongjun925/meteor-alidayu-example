import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
});

let alidayu;
function getAlidayu() {
    if (!alidayu) {
        alidayu = new Alidayu(
            {
                appkey: '',
                appsecret: ''
            }
        );
    }
}
getAlidayu();

WebApp.connectHandlers.use('/alidayu/sms_send', function (req, res, next) {
    if (req.method === 'GET') {
        const query = req.query;
        if (!(query.sms_free_sign_name && query.sms_param && query.rec_num && query.sms_template_code)) {
            res.end('parameter error.');
        } else {
            console.log(req.query)
            alidayu.smsSend(req.query, function(error, response) {
                if (!error) {
                    console.log(response);
                    res.end('response: ' + response);
                } else {
                    console.log(error);
                    res.end('error: ' + error);
                }
            });
        }
    } else {
        res.end('error.');
    }
});

WebApp.connectHandlers.use('/alidayu/sms_query', function (req, res, next) {
    if (req.method === 'GET') {
        const query = req.query;
        if (!(query.rec_num && query.query_date && query.current_page && query.page_size)) {
            res.end('parameter error.');
        } else {
            console.log(req.query)
            alidayu.smsQuery(req.query, function(error, response) {
                if (!error) {
                    console.log(response);
                    res.end('response: ' + response);
                } else {
                    console.log(error);
                    res.end('error: ' + error);
                }
            });
        }
    } else {
        res.end('error.');
    }
});

WebApp.connectHandlers.use('/alidayu/tts_singlecall', function (req, res, next) {
    if (req.method === 'GET') {
        const query = req.query;
        if (!(query.tts_param && query.called_num && query.called_show_num && query.tts_code)) {
            res.end('parameter error.');
        } else {
            console.log(req.query)
            alidayu.ttsSinglecall(req.query, function(error, response) {
                if (!error) {
                    console.log(response);
                    res.end('response: ' + response);
                } else {
                    console.log(error);
                    res.end('error: ' + error);
                }
            });
        }
    } else {
        res.end('error.');
    }
});

WebApp.connectHandlers.use('/alidayu/voice_singlecall', function (req, res, next) {
    if (req.method === 'GET') {
        const query = req.query;
        if (!(query.called_num && query.called_show_num && query.voice_code)) {
            res.end('parameter error.');
        } else {
            console.log(req.query)
            alidayu.voiceSinglecall(req.query, function(error, response) {
                if (!error) {
                    console.log(response);
                    res.end('response: ' + response);
                } else {
                    console.log(error);
                    res.end('error: ' + error);
                }
            });
        }
    } else {
        res.end('error.');
    }
});

WebApp.connectHandlers.use('/alidayu/voice_doublecall', function (req, res, next) {
    if (req.method === 'GET') {
        const query = req.query;
        if (!(query.caller_num && query.called_show_num && query.called_num && query.called_show_num)) {
            res.end('parameter error.');
        } else {
            console.log(req.query)
            alidayu.voiceDoublecall(req.query, function(error, response) {
                if (!error) {
                    console.log(response);
                    res.end('response: ' + response);
                } else {
                    console.log(error);
                    res.end('error: ' + error);
                }
            });
        }
    } else {
        res.end('error.');
    }
});