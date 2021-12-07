const urlGenerator = () => {
  const SIZE_URL = 6;
  const SYMBOLS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';

  let url = '';

  for (let i = 0; i < SIZE_URL; i++) {
    const index = Math.random() * (SYMBOLS.length - 0) + 0;
    url += SYMBOLS.substring(index, index + 1);
  }

  return url;
};

export default urlGenerator;