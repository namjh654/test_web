export enum ErrorCode {
    InternalServerError = 'C001',
    AuthenticationTimeout = 'C007',
    NotExistRoom = 'C010',
    NotMatchAuthCode = 'C014',
    NotMatchLoginId = 'C015',
    NotMatchPassword = 'C016',
    NotFoundPhoneNumber = 'C017',
    NotMatchAuthNumber = 'C018',
    NotFoundMember = 'P007',
    ExistEmailAndPhoneNumber = 'P012',
    DuplicateEmail = 'P013',
    DuplicatePhoneNumber = 'P014',
    ExistRoom = 'P015',
    NotFoundRegistrationNumber = 'P017',
    DuplicateRegistrationNumber = 'P018',
    ExpiredRoom = 'P023',
    MaxUploadSize = 'SY001',
    NotAllowedRegistrationNumber = 'P025',
  
  }
  
  // export const ErrorCode = {
  //   NOTMATCHPASSWORD: 'C016',
  // } as const;
  // type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
  