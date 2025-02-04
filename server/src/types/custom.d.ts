import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: { sub: string };  // declare user property
      body: { user_id?: string } & Record<string, any>;  // declare user_id on the body
    }
  }
}
