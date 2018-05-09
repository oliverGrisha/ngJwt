# ngJwt

A very basic module to manage JWT authentication.

## Quick start

+ Install angular-ngjwt with [Bower](https://github.com/bower/bower).

>
```bash
$ bower install ngJwt --save
```

+ Include the required libraries in your `index.html`:

>
``` html
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/ngJwt/dist/ngJwt.min.js"></script>
```

+ Inject the `ngJwt` module into your app:

>
``` js
angular.module('myApp', ['ngJwt']);
```

## Change default options:
+ You can override global defaults for the plugin with ngJwtProvider.defaults

>
``` js
angular.module('myApp', ['ngJwt'])
.config(['ngJwtProvider', function(ngJwtProvider) {
  angular.extend(ngJwtProvider.defaults, {
    localStorageKey: '$ngJwt_token', // The localstorage key is where the JWT token is saved (string)
    separatedCharacter: '.', // The character that separates each part of the JWT token (string)
    errorCodes: [401, 403], // The array of status codes that you want the '$errorCode' event to be trigger with (array of integer)
    removeTokenOnError: true // If true, the JWT token will be removed when the '$errorCode' event is triggered (boolean)
  });
}]);
```

## '$errorCode' event listener:
+ This event will be triggered whenever a http error response contains any of the error codes provided within the ngJwtProvider errorCodes options

>
``` js
angular.module('myApp', ['ngJwt'])
.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$errorCode', function(event, response) {
    // [ your code here ]
  });
}]);
```

## Usage

>
``` js
angular.module('myApp', ['ngJwt'])
.controller('SomeCtrl', ['ngJwt', function(ngJwt) {
  ngJwt.setToken("[ Your Token ]"); // This method sets the token that will be sent in all your http requests.
  ngJwt.getToken(); // This method return the stored token.
  ngJwt.getDecodedInfo(); // This method return the token encoded info.
  ngJwt.removeToken(); // This method remove the stored token.
}]);
```

## Running the demo

+ Keep in mind you need to serve the demo, for this example we are use php -S

>
``` sh
git clone https://github.com/oliverGrisha/ngJwt.git
cd ngJwt
php -S localhost:9000 # go to http://localhost:9000/demo
```

## Authors

- [**Ibán Dominguez Noda**](https://github.com/ibandominguez)
- [**Óliver Grisha Lorenzo Felipe**](https://github.com/oliverGrisha)
- [**Ayoze Vera Arbelo**](https://github.com/AyozeVera)
