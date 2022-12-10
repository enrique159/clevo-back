import moment from "moment-timezone";

export const dateTimeZoneFormat = () => {
  return moment().tz("America/Chihuahua").format();
}
