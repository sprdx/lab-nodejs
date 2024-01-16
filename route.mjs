import register from "./controller/userController.mjs";

export function route(req) {
    console.log("================================ PROCESS START ================================")

    const url = req.url;
    const method = req.method; 
    getPathRaw(url);
    let queryParamRaw = getQueryParamRaw(url);
    getQueryParamPairs(queryParamRaw);

    let response = null; 

    if (url.startsWith("/user")) {
        response =  register();
    } else {
        response = "Not found"
    }

    console.log("================================ PROCESS END ================================")

    return response;
}

function getPathRaw(url) {
    let queryParamSignIndex = url.indexOf("?");

    if (queryParamSignIndex !== -1) {
        let pathRaw = url.slice(0, queryParamSignIndex);
        console.log(pathRaw);
        return pathRaw;
    }
    return url;
}

function getQueryParamRaw(url) {
    let queryParamSignIndex = url.indexOf("?");

    if (queryParamSignIndex !== -1) {
        let queryParamRaw = url.slice(queryParamSignIndex+1);
        console.log(queryParamRaw);
        return queryParamRaw;
    }
    return null;
}

// if queryParamRaw !== null
function getQueryParamPairs(queryParamRaw) {
    let result = {};
    let pairs = queryParamRaw.split("&");

    for (let pair of pairs) {
      let keyValue = pair.split('=');
      if (keyValue.length === 2) {
        result[keyValue[0]] = keyValue[1];
      }
    }
    console.table(result);
  
    return result;
}

export default route;