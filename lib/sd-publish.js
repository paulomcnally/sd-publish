var request = require('request');

var Facebook = function() {

};

Facebook.prototype.publish = function(params, callback) {

  var defaultParams = {
    page_id: params.page_id,
    url: params.url,
    caption: params.caption,
    place: params.place || params.page_id,
    tags: [
      {
        'x': 0,
        'y': 0,
        'tag_uid': params.profile_id,
        'tag_text': params.profile_display_name
      }
    ],
    access_token: process.env.FACEBOOK_ACCESS_TOKEN || params.access_token
  };

  // http request options
  var requestOptions = {
    url:'https://graph.facebook.com/v2.5/' + defaultParams.page_id + '/photos',
    form: defaultParams
  };

  // http request
  request.post(requestOptions, function(err, httpResponse, body){
    var jsonBody = JSON.parse(body);
    callback(jsonBody.id);
  });
};

module.exports = new Facebook();
