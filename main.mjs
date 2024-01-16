import http from "http";
import route from "./route.mjs";

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    // const header = req.headers;

    console.log(url);
    console.log(method);
    // console.log(header);

    res.write(route(req));
    res.end();
});

server.listen(8080);