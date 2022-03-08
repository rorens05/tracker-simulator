// import AsyncStorage from '@react-native-community/async-storage';
// import { DEV_API_URL } from '../constants';
// export default class Base {
//   constructor() {}

//   sendRequest = async ({path, method = 'GET', data = {}, base, headers}) => {
//     let url = base ? base + path : DEV_API_URL + path;

//     let config = {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
//       },
//       method: method,
//     };

//     if (headers) config = {...config, headers};

//     console.info('%cNew connection has established', 'color: red');
//     console.log({config, url, data});

//     if (method != 'GET') {
//       config.body = JSON.stringify(data);
//     }

//     let response = await fetch(url, config)
//       .then(async function(res) {
//         return res;
//       })
//       .catch(function(error) {
//         if (error.message.match(/Network request failed/)) {
//           console.log({err: 'Failed to establish connection'});
//           // alert("Please check your internet connection");
//           return {network_error: true, ok: false};
//         }
//         return error;
//       });

//     if (response.network_error) {
//       return response;
//     }

//     let responseData = await response.text();

//     if (this.isJSON(responseData)) {
//       responseData = JSON.parse(responseData);
//     }

//     let output = {
//       ...response,
//       data: responseData,
//       statusMessage: this.getStatusMessage(response.status),
//     };
//     console.log(output);
//     return output;
//   };

//   isJSON = str => {
//     try {
//       JSON.parse(str);
//     } catch (e) {
//       return false;
//     }
//     return true;
//   };

//   getStatusMessage = status_code => {
//     switch (status_code) {
//       case 100:
//         return 'Continue';
//       case 101:
//         return 'Switching Protocols';
//       case 102:
//         return 'Processing';
//       case 200:
//         return 'OK';
//       case 201:
//         return 'Created';
//       case 202:
//         return 'Accepted';
//       case 203:
//         return 'Non-authoritative Information';
//       case 204:
//         return 'No Content';
//       case 205:
//         return 'Reset Content';
//       case 206:
//         return 'Partial Content';
//       case 207:
//         return 'Multi-Status';
//       case 208:
//         return 'Already Reported';
//       case 226:
//         return 'IM Used';
//       case 300:
//         return 'Multiple Choices';
//       case 301:
//         return 'Moved Permanently';
//       case 302:
//         return 'Found';
//       case 303:
//         return 'See Other';
//       case 304:
//         return 'Not Modified';
//       case 305:
//         return 'Use Proxy';
//       case 307:
//         return 'Temporary Redirect';
//       case 308:
//         return 'Permanent Redirect';
//       case 400:
//         return 'Bad Request';
//       case 401:
//         return 'Unauthorized';
//       case 402:
//         return 'Payment Required';
//       case 403:
//         return 'Forbidden';
//       case 404:
//         return 'Not Found';
//       case 405:
//         return 'Method Not Allowed';
//       case 406:
//         return 'Not Acceptable';
//       case 407:
//         return 'Proxy Authentication Required';
//       case 408:
//         return 'Request Timeout';
//       case 409:
//         return 'Conflict';
//       case 410:
//         return 'Gone';
//       case 411:
//         return 'Length Required';
//       case 412:
//         return 'Precondition Failed';
//       case 413:
//         return 'Payload Too Large';
//       case 414:
//         return 'Request-URI Too Long';
//       case 415:
//         return 'Unsupported Media Type';
//       case 416:
//         return 'Requested Range Not Satisfiable';
//       case 417:
//         return 'Expectation Failed';
//       case 418:
//         return "I'm a teapot";
//       case 421:
//         return 'Misdirected Request';
//       case 422:
//         return 'Unprocessable Entity';
//       case 423:
//         return 'Locked';
//       case 424:
//         return 'Failed Dependency';
//       case 426:
//         return 'Upgrade Required';
//       case 428:
//         return 'Precondition Required';
//       case 429:
//         return 'Too Many Requests';
//       case 431:
//         return 'Request Header Fields Too Large';
//       case 444:
//         return 'Connection Closed Without Response';
//       case 451:
//         return 'Unavailable For Legal Reasons';
//       case 499:
//         return 'Client Closed Request';
//       case 500:
//         return 'Internal Server Error';
//       case 501:
//         return 'Not Implemented';
//       case 502:
//         return 'Bad Gateway';
//       case 503:
//         return 'Service Unavailable';
//       case 504:
//         return 'Gateway Timeout';
//       case 505:
//         return 'HTTP Version Not Supported';
//       case 506:
//         return 'Variant Also Negotiates';
//       case 507:
//         return 'Insufficient Storage';
//       case 508:
//         return 'Loop Detected';
//       case 510:
//         return 'Not Extended';
//       case 511:
//         return 'Network Authentication Required';
//       case 599:
//         return 'Network Connect Timeout Error';
//       default:
//         return 'Something went wrong: ' + status_code;
//     }
//   };
// }
