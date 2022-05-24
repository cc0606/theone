
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
'Authorization' : `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzA3Mjc2ODAzOCIsImlhdCI6MTY1MzMyMDU3NiwiZXhwIjoxNjUzOTI1Mzc2fQ.1YJ2tZB43ojRQcmhCiakwD7pfK9sUR6dPMqI8euFkC2VLrjPpYJHHE7tXQ_T4Rl8vBjYSoTz36js0NiOw_nqpg`,
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

    $notify("z2", "18086468039", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
