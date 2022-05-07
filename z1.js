
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.theone.art/user/api/userCheckIn/save`;
const method = `POST`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Origin' : `https://www.theone.art`,
'Connection' : `keep-alive`,
'Accept' : `application/json, text/plain, */*`,
'Referer' : `https://www.theone.art/`,
'Host' : `api.theone.art`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1`,
'Authorization' : `Hm_lpvt_37e1f8a986a871fd2944042865a17e6a=1651857205; Hm_lvt_37e1f8a986a871fd2944042865a17e6a=1651857153; acw_tc=2f6fc12516518571505701807eedd56736e56abfea740cc87ef7cda09283dd; aliyungf_tc=58c54e529dd24d8cf93086ba5d0fff2b87021632eda100a100fb431d45422072`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);

    $notify("z1", "18086468039", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
