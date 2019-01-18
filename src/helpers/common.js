export const BASE_URL = 'http://localhost:3001';

export const getLocalStorageItem = key => process.browser && localStorage.getItem(key);

export const axiosHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getLocalStorageItem('userToken')}`,
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
