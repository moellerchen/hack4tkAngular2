/**
 * Created by nbovenkerk on 25.11.2016.
 */
export class User {
  constructor (
    public ID: number,
    public user_login: String,
    public user_nicename: String,
    public user_email: String,
    public display_name: String,
    public activeFields: string[]
  ) {}
}
