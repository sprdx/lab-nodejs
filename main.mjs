import http from "http";
import route from "./route.mjs";

const server = http.createServer((req, res) => {
    res.write(route(req));
    res.end();
});

server.listen(8080);