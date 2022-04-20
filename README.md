# React Redux webpack boilerplate

start
npm start

## Moch API

You can also copy paste the folder tools to use it in other projects as mock api server
jus add this to your package.json

```json
  "scripts": {
    "prestart:api": "node tools/createMockDb.js",
    "start:api": "node tools/apiServer.js",
  }
```

to start the mock api server run:
npm run start:api

---

> npm start: use run-p to run the two scripts in parallel

> when you avoid writing Spaghetti code try not produce Lasagna code!

> while trying so hard to avoid writing spaghetti code, you end up writing Lasagna code where the amount of layers abstractions is kind of stackoverflow.
