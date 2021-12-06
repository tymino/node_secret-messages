import crypto from 'crypto';

const hash = async (data) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(data, process.env.SECRET_KEY, 64, (err, result) => {
      if (err) reject(err);

      resolve(result.toString('hex'));
    });
  });
};

const verify = async (password, hash) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, process.env.SECRET_KEY, 64, (err, result) => {
      if (err) reject(err);

      resolve(hash == result.toString('hex'));
    });
  });
};

export { hash, verify };
