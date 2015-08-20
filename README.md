# Angular-interviewr-ui
[![Dependency Status](https://david-dm.org/ok2ju/angular-interviewr-ui.svg)](https://david-dm.org/ok2ju/angular-interviewr-ui)
[![devDependency Status](https://david-dm.org/ok2ju/angular-interviewr-ui/dev-status.svg)](https://david-dm.org/ok2ju/angular-interviewr-ui#info=devDependencies)

AngularJS App of INTERVIEWR

## Prerequisites

Interviewr-ui is an [AngularJS](https://angularjs.org/) single page web application which runs on a [NodeJS](http://nodejs.org/) server using [ExpressJS](http://expressjs.com/).

## Installation

Clone repo:

    git clone https://github.com/ok2ju/angular-interviewr-ui.git

Then install npm dependencies by running following command:

    npm install

## Development

To start develop run following command in your terminal:

    cd angular-interviewr-ui && npm start
    
Visit your app at [http://localhost:4000](http://localhost:4000)

## Note

ExpressJS server running at `port:8000`
But BrowserSync proxying it at `port:4000`. NodeJS API allow to establish connection to [http://localhost:4000](http://localhost:4000). When development will be done, change CORS-enable part at Back-End API to allow establish connection on `port:8000` (IMPORTANT).

## Code quality standards

###### [Feature File Names]

Use consistent names for all components following a pattern `feature.type.js`

```javascript

    // controllers
    profile.controller.js

    // services/factories
    logger.service.js

    // constants
    constants.js

    // module definition
    profile.module.js

    // routes
    profile.routes.js

    // configuration
    profile.config.js

    // directives
    avenger-profile.directive.js
```

###### [Controller and Service Names]

Use UpperCamelCase for controllers and services

```javascript

    // profile.controller.js
    angular
        .module
        .controller('ProfileController', ProfileController);

    function ProfileController() { }
```

```javascript

    // profile.service.js
    angular
        .module
        .factory('profileService', profileService);

    function profileService() { }
```

## License

The MIT License (MIT)

Copyright (c) 2015 Alexey Vakulich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
