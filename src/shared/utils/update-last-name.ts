import { RecycleDonate } from "shared/enums";

export const updateLastName = (
  lastName: string,
  recycleDonate: RecycleDonate
) => {
  const brandName = "-Mane " + recycleDonate[0].toUpperCase();
  return lastName + brandName;
};
