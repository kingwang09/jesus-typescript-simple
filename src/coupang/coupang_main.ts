import moment from 'moment';
import crypto from 'crypto';
import axios from 'axios';

const REQUEST_METHOD = 'GET';
const DOMAIN = 'https://api-gateway.coupang.com';
const COUPANG_SEARCH_API_URL =
  '/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=tv&limit=10';

// Replace with your own ACCESS_KEY and SECRET_KEY
const ACCESS_KEY = process.env.COUPANG_ACCESS_KEY || '';
const SECRET_KEY = process.env.COUPANG_SECRET_KEY || '';
console.log('ACCESS_KEY: ', ACCESS_KEY);
console.log('SECRET_KEY: ', SECRET_KEY);

async function main() {
  await search('tv', 'app', 5);
}
main();

function generateHmac(
  method: string,
  url: string,
  secretKey: string,
  accessKey: string,
) {
  const parts = url.split(/\?/);
  const [path, query = ''] = parts;

  const datetime = moment.utc().format('YYMMDD[T]HHmmss[Z]');
  const message = datetime + method + path + query;

  const signature = crypto
    .createHmac('sha256', secretKey)
    .update(message)
    .digest('hex');

  console.log('')
  console.log('')
  return `CEA algorithm=HmacSHA256, access-key=${accessKey}, signed-date=${datetime}, signature=${signature}`;
}

async function search(
  keyword: string,
  channelId: string,
  limit: number,
  imageSize?: string,
) {
  const authorization = generateHmac(
    REQUEST_METHOD,
    COUPANG_SEARCH_API_URL,
    SECRET_KEY,
    ACCESS_KEY,
  );
  console.log(`keyword=${keyword}`)
  const params: any = {
    keyword,
    subId: channelId,
    limit,
  };
  if(imageSize){
    params.imageSize = imageSize;
  }
  try {
    const response = await axios.request({
      method: REQUEST_METHOD,
      //url: DOMAIN + COUPANG_SEARCH_API_URL,
      url: 'https://api-gateway.coupang.com/v2/providers/affiliate_open_api/apis/openapi/products/search?keyword=tv&limit=10',
      headers: { Authorization: authorization },
      //params: params,
    });
    console.log('response data: ', response.data);
    //coupang api error case
  } catch (err) {
    console.log('[coupang] search fail.');
    console.log(err);
  }
}
