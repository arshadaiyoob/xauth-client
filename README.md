# xauth-client

xAuth-Client 

## Installation

`npm install --save dev-xauth-client`

or with yarn

`yarn add dev-xauth-client`

## Usage

npm
```js
var xAuth = require('dev-xauth-client');
// create a new instance of the xAuth "class"
var xauth = new xAuth();
// init with api and secret
xauth.init('api', 'secret');

// pass the users id to enable two-factor and returns Qr-Code to register the device
xauth.enableXAuth(clientId).then((response) => {
    qr = response.data.qr-code;
})
// sending auth request to mobile
xauth.twoFactorRequest(userId);
```