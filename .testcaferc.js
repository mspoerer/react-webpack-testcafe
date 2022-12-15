module.exports = {
    baseUrl:  'http://localhost:8080',
    browsers: 'chrome', // like in pipeline, can be overridden with command line param
    concurrency: 1,
    src: ['./e2e/*.test.{js,ts,tsx}'],
    disablePageCaching: true,
    hostname: 'localhost',
    skipJsErrors: true,
};
