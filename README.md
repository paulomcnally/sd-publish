# sd-publish

Upload photos to fans page on Facebook

## Required

    process.env.FACEBOOK_ACCESS_TOKEN

## Example

    var facebook = require('sd-publish');

    var params = {
      page_id: '1468130593490367',
      url: 'https://s3.amazonaws.com/codementor_content/nodejs_logo_green.jpg',
      caption: 'NodeJS',
      place: '1468130593490367',
      profile_id: '1457253294515196',
      profile_display_name: 'Paulo McNally'
    };

    facebook.publish(params, function(data) {
      console.log(data);
    });



## More info

https://developers.facebook.com/docs/graph-api/reference/page
