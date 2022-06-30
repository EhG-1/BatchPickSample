const DEV_URL = 'http://localhost:3001';
const PROD_URL = 'https://test_prod';
export const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;