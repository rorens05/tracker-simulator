import Base from './Base';

export default class CodeValidationAPI extends Base {
  requestCode = async code => {
    return this.sendRequest({
      path: `api/v2/devices/request_code?existing_code=${code}`,
      method: 'GET',
    });
  };

  validateCode = async (code, model) => {
    return this.sendRequest({
      path: `api/v2/devices/validate_code?code=${code}&model=${model}`,
      method: 'GET',
    });
  };
}
