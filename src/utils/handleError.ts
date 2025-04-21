import { isAxiosError } from 'axios';
import { ErrorCode } from '../errorCode';

const errorFieldMap: { [key: string]: string } = {
  [ErrorCode.NotMatchAuthCode]: 'code',
  [ErrorCode.NotMatchLoginId]: 'loginId',
  [ErrorCode.NotMatchPassword]: 'password',
  [ErrorCode.NotFoundPhoneNumber]: 'phoneNumber',
  [ErrorCode.NotMatchAuthNumber]: 'emailAuthentication',
  [ErrorCode.DuplicateEmail]: 'loginId',
  [ErrorCode.NotFoundMember]: 'phone',
  [ErrorCode.ExistRoom]: 'password',
  [ErrorCode.DuplicatePhoneNumber]: 'phone',
  [ErrorCode.DuplicateRegistrationNumber]: 'registrationNumber',
  [ErrorCode.NotFoundRegistrationNumber]: 'registrationNumber',
  [ErrorCode.InternalServerError]: 'registrationNumber',
  [ErrorCode.NotAllowedRegistrationNumber]: 'registrationNumber',
  [ErrorCode.MaxUploadSize]: 'qna',
};

export const errorHandler = (error: any, setError: any) => {
  if (isAxiosError(error) && error.response) {
    const { code } = error.response.data;
    setError(errorFieldMap[code], {
      message: `message_${code}`,
    });
  }
};

export const errorAlert = (error: Error) => {
  if (isAxiosError(error) && error.response) {
    const { code } = error.response.data;
    alert(`message_${code}`);
  }
};
