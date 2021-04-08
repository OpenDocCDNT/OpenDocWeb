function fetchCreatorPost(url, bodyParams) {
  return new Promise((resolve, reject) => {
    let formBody = []

    for (let property in bodyParams) {
      if (bodyParams.hasOwnProperty(property)) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(bodyParams[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
    }

    formBody = formBody.join("&");

    let statusCode;
    let responseBody;
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    }).then(r => {
      statusCode = r.status;
      return r.json();
    }).then(d => {
      responseBody = d;
      const response = {
        statusCode: statusCode,
        responseBody: responseBody
      }
      resolve(response);
    }).catch(e => {
      console.log(e)
      reject();
    })
  })
}

function fetchCreatorGet(url) {
  return new Promise((resolve, reject) => {
    let statusCode;
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(r => {
      statusCode = r.status;
      resolve(statusCode)
    }).catch(e => {
      console.log(e)
      reject();
    })
  })
}

export {fetchCreatorPost, fetchCreatorGet};
