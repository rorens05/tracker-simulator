import Base from './Base';

export default class AttendanceAPI extends Base {
  getAttendances = async code => {
    return this.sendRequest({
      path: `api/v2/attendance/record_attendance/${code}`,
      method: 'GET',
    });
  };

  recordAttendance = async (code, data) => {
    return this.sendRequest({
      path: `api/v2/attendance/record_attendance/${code}`,
      method: 'POST',
      data,
    });
  };
}
