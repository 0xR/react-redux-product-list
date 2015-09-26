import expressProxy from 'express-http-proxy';

export default expressProxy('https://www.wehkamp.com', {
  forwardPath: function(req) {
    return '/nlbe/api' + req.originalUrl;
  }
})
