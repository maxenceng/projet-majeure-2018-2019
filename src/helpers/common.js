export const isConnected = false;

export const getJwtToken = () => {
  const token = process.browser && localStorage.getItem('userToken');
  return token ? `Bearer ${token}` : null;
};

export const axiosHeaders = () => ({
  headers: {
    Authorization: getJwtToken(),
  },
});

export const getErrorMessage = (err) => {
  const { data } = err.response;
  if (!data) return null;
  return data.message || data.error || data.err;
};

const monthArray = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

const date = timestamp => new Date(parseInt(timestamp, 10));

export const getDay = timestamp => date(timestamp).getDate();

export const getMonth = timestamp => monthArray[date(timestamp).getMonth()];
