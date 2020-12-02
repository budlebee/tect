const dotenv = require('dotenv');

const prod = process.env.NODE_ENV === 'production';
dotenv.config();
module.exports = {
  'process.env.BACKEND_URL': prod ? '' : '',
  'process.env.FIREBASE_API_KEY': prod
    ? process.env.FIREBASE_API_KEI
    : process.env.FIREBASE_API_KEI,
  'process.env.FIREBASE_DB_URL': prod
    ? process.env.FIREBASE_DB_URL
    : process.env.FIREBASE_DB_URL,
  'process.env.FIREBASE_AUTH_DOMAIN': prod
    ? process.env.FIREBASE_AUTH_DOMAIN
    : process.env.FIREBASE_AUTH_DOMAIN,
  'process.env.FIREBASE_PROJECT_ID': prod
    ? process.env.FIREBASE_PROJECT_ID
    : process.env.FIREBASE_PROJECT_ID,
  'process.env.FIREBASE_STORAGE_BUCKET': prod
    ? process.env.FIREBASE_STORAGE_BUCKET
    : process.env.FIREBASE_STORAGE_BUCKET,
  'process.env.FIREBASE_MESSAGING_SENDER_ID': prod
    ? process.env.FIREBASE_MESSAGING_SENDER_ID
    : process.env.FIREBASE_MESSAGING_SENDER_ID,
  'process.env.FIREBASE_APP_ID': prod
    ? process.env.FIREBASE_APP_ID
    : process.env.FIREBASE_APP_ID,
  'process.env.FIREBASE_MEASUREMENT_ID': prod
    ? process.env.FIREBASE_MEASUREMENT_ID
    : process.env.FIREBASE_MEASUREMENT_ID,
};
