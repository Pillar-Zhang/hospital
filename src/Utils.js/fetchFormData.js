

export formFetchBody=(bodyObj)={
    let formBody = [];
for (let property in bodyObj) {
  let encodedKey = encodeURIComponent(property);
  let encodedValue = encodeURIComponent(bodyObj[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&")
return formBody
}
