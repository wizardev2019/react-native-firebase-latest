// Validates email input
export const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Validates phone input
export const validatePhone = phone => {
  const re = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
  return re.test(String(phone).toLowerCase());
};

// Capitalizes string
export const capitalizeString = text => {
  let res = '';
  text.split(' ').map((snippet, index) => {
    if (index > 0) {
      res += ' ';
    }
    res = res + snippet.charAt(0).toUpperCase() + snippet.substring(1);
    return true;
  });
  return res;
};
