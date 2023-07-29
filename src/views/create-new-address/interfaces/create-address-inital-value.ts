import { RecycleDonate } from "shared/enums";

export interface ICreateAddressInitialValue {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
  recycleDonate: RecycleDonate;
}
