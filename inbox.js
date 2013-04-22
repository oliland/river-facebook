var Facebook = function(delegate) {
  this.delegate = delegate;
};

Facebook.prototype.authRequirements = function(callback) {
  var callbackURL = this.delegate.callbackURL();
  HTTP.request({
    url: 'https://www.facebook.com/dialog/oauth/'
    method: 'GET',
    oauth: {
      client_id = '103352299864689',
      redirect_uri = callbackURL,
      state = 'login',
      scope = 'read_mailbox'
    }
  }, function(err, response) {
    if (err) {
      return callback(err);
    }
    console.log(response);
  });
}

PluginManager.registerPlugin(Facebook, 'com.oliland.river.facebook-inbox');
