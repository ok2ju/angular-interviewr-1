require('angular').module('app.user.profile', [
        'app.resource.user'
    ])
    .controller('UserProfileController', require('./userProfile.controller'));
