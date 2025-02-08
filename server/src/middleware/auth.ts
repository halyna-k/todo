import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import { auth } from 'express-oauth2-jwt-bearer';

dotenv.config();

// Middleware to check JWT and attach user info to the request
export const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256',
});

// Error handler for unauthorized access
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ message: 'Invalid or expired token' });
  }
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
};

// Middleware to attach user ID to the request
export const authenticateUser = (req: Request, res: Response, next: NextFunction): void => {
  const user = req.auth?.payload;

  if (!user || !user.sub) {
    console.error('User ID not found in token:', user);
    res.status(401).json({ message: "Unauthorized: User ID not found" });
    return
  }

  (req as any).authUser = { user_id: user.sub };
  next();
};
