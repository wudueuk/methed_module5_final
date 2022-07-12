export const setToken = token => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
    token = localStorage.getItem('bearer');
  }

  return token;
};
