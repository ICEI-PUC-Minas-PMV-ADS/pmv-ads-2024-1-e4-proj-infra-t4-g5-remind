function checkStatusCode(res, expectedStatus = 200) {
  if (res.status === expectedStatus) {
    return res;
  }

  const reqData = JSON.parse(JSON.stringify(res)).req;
  throw new Error(` 
    reponse-status  : ${JSON.stringify(res.status)}
    reponse-body    : ${JSON.stringify(res.body)}
    request-method  : ${JSON.stringify(reqData.method)}
    request-url     : ${JSON.stringify(reqData.url)}
    request-data    : ${JSON.stringify(reqData.data)}
    request-headers : ${JSON.stringify(reqData.headers)}
    `);
}

module.exports = checkStatusCode;
