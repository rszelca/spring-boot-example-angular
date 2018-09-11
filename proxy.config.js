const PROXY_CONFIG = [

  {
    context: [
      '/api/'
    ],

    target: 'http://localhost:8080',
    secure: false,
    onProxyRes: function (proxy) {
    if (proxy && proxy.headers && proxy.headers['set-cookie']) {
    proxy.headers['set-cookie'] = proxy.headers['set-cookie'].map(function (cookie) {
    cookie = cookie.replace(/path=.*;/gi, 'path=/;');
    cookie = cookie.replace(/; Secure/gi, '');
    return cookie;
  });
}
}
}
];

module.exports = PROXY_CONFIG;
