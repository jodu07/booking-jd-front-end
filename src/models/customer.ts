/**
 * Represents the data of service menu.
 */
export interface Customer {
  /** The id of customer. */
  id: string;
  /** The name of customer. */
  name: string;
  /** The email of customer. */
  email: string;
  /** The username of customer. */
  username: string;
  /** The password de user of customer. */
  password: string;
  /** The bookings of customer. */
  bookings: string[];
  /** The type of user. */
  typeUser: string;
}
