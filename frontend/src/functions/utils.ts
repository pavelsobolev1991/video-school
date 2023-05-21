export const formatPhoneNumber = (phone:string) =>
  phone?.replace(/[^0-9]/g, '').substring(1, 11);