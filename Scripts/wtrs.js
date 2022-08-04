// ^https:\/\/api\.interpreter\.caiyunai\.com\/v1\/page\/auth
var tp = new Date().getTime()
var body = $response.body.replace(/browserid":\".+\"/g, 'browserid":"{}'.format(tp));
$done({ body });