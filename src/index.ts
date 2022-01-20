import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 3000;
const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  response.end("hello world...");
});

server.listen(port, () => console.log("HTTP Connected"));