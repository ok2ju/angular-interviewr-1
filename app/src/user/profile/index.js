require('angular').module('app.user.profile', [
        'app.resource.user'
    ])
    .config(require('./userProfile.config'))
    .controller('UserProfileController', require('./userProfile.controller'));
