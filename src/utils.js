const domain = "http://localhost:8080"; // delpoy后跑起来的url 目前填localhost

export const signup = (credential, asNGO) => {
  const signupUrl = `${domain}/register/${asNGO ? "ngo" : "donor"}`;
  return fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status == 409) {
      throw Error("Username already exists");
    }
    if (response.status !== 200) {
      throw Error("Fail to sign up");
    }
  });
};

export const login = (credential, asNGO) => {
  //credential 用户and密码
  const loginUrl = `${domain}/authenticate/${asNGO ? "ngo" : "donor"}`; // string template: es6
  return fetch(loginUrl, {
    //fetch: input parameter (target location, 配置)
    method: "POST",
    headers: {
      "Content-Type": "application/json", //tell the body is actually  json
    },
    body: JSON.stringify(credential), //json object-->string
  }).then((response) => {
    //this response is generated by website
    if (response.status !== 200) {
      // see the status results returned by background
      throw Error("Fail to log in");
    }

    return response.json();
  }); //then里的内容在request成功返回response后执行，else if 断网 or 404 不执行,被catch掉,这里的catch写在了业务层
};
