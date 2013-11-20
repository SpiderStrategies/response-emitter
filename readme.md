Run:

`node index.js <file>`

e.g.

`node index.js access.log.gz`

To use with the [response-collider](https://github.com/SpiderStrategies/response-emitter):

`node index.js access.log.gz | node ../response-collider/server.js`

Then open localhost:8080 (served by response collider)
