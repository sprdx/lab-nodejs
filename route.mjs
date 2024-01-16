import register from "./controller/userController.mjs";

export function route(req) {
    console.log("================================ PROCESS START ================================")
    let response = null; 

    const url = req.url;
    const method = req.method;
    console.log(url);
    console.log(method); 

    let result = getPathAndQueryRaw(url);
    if (result["queryRaw"] != null) {
        getQueryParamPairs(result["queryRaw"]);
    }

    if (url.startsWith("/user")) {
        response =  register();
    } else {
        response = "Not found"
    }

    console.log("================================ PROCESS END ================================")
    return response;
}

function getPathAndQueryRaw(url) {
    let result = {}
    let queryParamSignIndex = url.indexOf("?");

    if (queryParamSignIndex !== -1) {
        result["pathRaw"] = url.slice(0, queryParamSignIndex);
        result["queryRaw"]= url.slice(queryParamSignIndex+1);
    } else {
        result["pathRaw"] = url;
        result["queryRaw"] = null;
    }

    console.table(result);

    return result;
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