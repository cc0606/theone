
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
'Authorization' : `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODY0OTcwMDcyOSIsImlhdCI6MTY1Mjc4MzYzMywiZXhwIjoxNjUzMzg4NDMzfQ._T6GatfxHslb9DFAPbkwkVmoLoH2iJb7DwWTHXqNZcsrruiF4BlkY7wj3S7OoTt9P2iw65YOOtn4nr8xrz9T7Q`,
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

    $notify("D10", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
