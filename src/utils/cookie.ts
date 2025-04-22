import { Cookies } from 'react-cookie';

const cookie = new Cookies();

export const setCookie = (token: string) => {
  cookie.set('token', token, {
    path: '/',
    secure: true,
    sameSite: 'none',
  });
};

export const getToken = () => {
  return cookie.get('token');
};

export const removeCookie = () => {
  cookie.remove('token', { path: '/' });
};

export const setRoomId = (roomId: string) => {
  cookie.set('roomId', roomId, {
    path: '/',
    secure: true,
    sameSite: 'none',
  });
};

export const getRoomId = () => {
  return cookie.get('roomId');
};
