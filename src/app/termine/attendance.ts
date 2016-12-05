import {Termin} from "./termin";
import {User} from "../users/user";
/**
 * Created by nbovenkerk on 25.11.2016.
 */
export class Attendance {
  public static ABSAGE = 'ab';
  public static ZUSAGE = 'zu';
  public static NICHT_ANGEGEBEN = 'na';

  constructor(public tkh_termine_id: number, public wp_users_id: number, public teilnahme: String) {

  }

  isAttending(){
    if (this.teilnahme == Attendance.ABSAGE) {
      return false;
    } else if (this.teilnahme == Attendance.ZUSAGE) {
      return true;
    } else if (this.teilnahme == Attendance.NICHT_ANGEGEBEN) {
      return null;
    }
    return null;
  }

}
