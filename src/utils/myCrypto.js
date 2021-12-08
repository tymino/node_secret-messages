import crypto from 'crypto';

const hash = async (data) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(data, process.env.SECRET_KEY_PASSWORD, 64, (err, result) => {
      if (err) reject(err);

      resolve(result.toString('hex'));
    });
  });
};

const verify = async (password, hash) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, process.env.SECRET_KEY_PASSWORD, 64, (err, result) => {
      if (err) reject(err);

      resolve(hash == result.toString('hex'));
    });
  });
};

const encrypt = (string) => {
  const key = Buffer.from(process.env.SECRET_KEY_MSG, 'base64');
  const iv = Buffer.from(process.env.SECRET_KEY_IV, 'base64');

  const cipher = crypto.createCipheriv('aes256', key, iv);

  let encrypted = cipher.update(string, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

const decrypt = (cryptedString) => {
  const key = Buffer.from(process.env.SECRET_KEY_MSG, 'base64');
  const iv = Buffer.from(process.env.SECRET_KEY_IV, 'base64');
  const decipher = crypto.createDecipheriv(
    'aes256',
    key,
    iv,
  );

  let decrypted = decipher.update(cryptedString, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
};

export { hash, verify, encrypt, decrypt };
