export const isConnected = false;

export const getJwtToken = () => {
  const token = process.browser && localStorage.getItem('userToken');
  return token ? `Bearer ${token}` : null;
};

export const axiosHeaders = () => ({
  Authorization: getJwtToken(),
});

export const getErrorMessage = err => err.response.data && err.response.data.message;
