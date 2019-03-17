[![Build Status](https://travis-ci.org/mottaquikarim/heroku-deployment-app-ex.svg?branch=master)](https://travis-ci.org/mottaquikarim/heroku-deployment-app-ex) [![Coverage Status](https://coveralls.io/repos/github/mottaquikarim/heroku-deployment-app-ex/badge.svg?branch=add-travis)](https://coveralls.io/github/mottaquikarim/heroku-deployment-app-ex?branch=add-travis) [![Heroku](http://heroku-badge.herokuapp.com/?app=petpedia&style=flat)](http://petpedia.herokuapp.com/)
# Heroku Deployment App

## Running Locally

```
$ npm run start:local
```

This will start the app but in a background process. To kill the process, run:

```
$ ps | grep node
```

Inspect the output and run 

```
$ kill -9 [PID]
```

Where `PID` references each process that is running node or nodemon.

## Testing

To test, run:

```
$ npm test
```

This will run jest assertions against application code and generate code coverage reports. To view the HTML report,

```
$ open coverage/index.html
```

This will open reporter in default browser.

## TODOs/Plz Halp

* Write a NPM script that will automatically run `ps` and kill all PIDs that correspond to node processes
