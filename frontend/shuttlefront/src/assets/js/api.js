function toParams(data) {
  let res = "";

  for (let item of data) {
    res += "/" + item;
  } 
  return res;
}

export async function api(met, endpoint, params, body) {
  let requestOptions = {
    method: met,
    credentials: "include",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  };

  if (met === "POST" || met === "PUT" || met === "PATCH") {
    requestOptions.body = JSON.stringify(body);
  }

  let paramString = "";
  if (params) {
    paramString = toParams(params);
  }

  let fullAddr = "/shuttleapi/" + endpoint + paramString;
  if (fullAddr.endsWith("/") === false) fullAddr += "/";

  const res = await fetch(fullAddr, requestOptions);

  if (res.status === 204) return true;
  if (res.status >= 200 && res.status <= 299) {
    let json = await res.json();
    return json;
  }
  throw new Error(res.statusText);
}
