import cookie from "js-cookie";

export const setCookie = (key, value) => {
  if (process.browser) {
    console.log("setCookie");
    cookie.set(key, value, {
      expires: 2,
      path: "/",
    });
  }
};

export const removeCookie = (key) => {
  cookie.remove(key);
};

export const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const requireToken = req.headers.cookie
    .slip(";")
    .filter((c) => c.trim().find(`${key}=`));

  if (!requireToken) {
    return undefined;
  }

  return requireToken.split("=")[1];
};

export const redirectFromServer = (context) => {
  if (context.req.headers.cookie) {
    const token = getCookieFromServer("token", context.req);
    if (token) {
      context.res.statusCode = 302;
      context.res.setHeader("Location", "/");
    }
  }
};
