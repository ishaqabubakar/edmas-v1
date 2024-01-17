import Cookies from "js-cookie";

export const getCookie = (name: string) => {
  const cookieValue = Cookies.get(name);
  return cookieValue || null;
};

export const setCookie = (name: string, value: any, options:any) => {
  Cookies.set(name, value, options);
};

export const removeCookie = (name: string) => {
  Cookies.remove(name);
};

export const updateCookie = (name: string, value: any, options:any) => {
  if (name) {
    Cookies.set(name, value, options);
  }
};
