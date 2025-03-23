import { Response } from 'express';

export default (res: Response, refreshToken: string): void => {
  res.cookie('refreshToken', refreshToken, {
    maxAge: 32 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    domain: 'https://noir-three.vercel.app/',
    path: '/',
  });
};
