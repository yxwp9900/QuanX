/*
^https?:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/yxwp9900/master/QuantX/Rewrite/jianxun.js

hostname=api.tipsoon.com
*/

let obj = JSON.parse($response.body);

obj["data"]["is_vip"] = true,
obj["data"]["vip_expire_time"] = "2080-12-10 00:00:00",

$done({body: JSON.stringify(obj)});
