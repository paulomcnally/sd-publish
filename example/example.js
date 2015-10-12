var facebook = require('../lib/sd-publish');

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
