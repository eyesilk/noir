import { Response } from 'express';

export default (res: Response, refreshToken: string): void => {
  res.cookie('refreshToken', refreshToken, {
    maxAge: 32 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.IS_SECURE === 'true',
    sameSite: process.env.SAME_SITE as boolean | 'lax' | 'strict' | 'none',
    domain: 'noir-three.vercel.app'
  });
};
