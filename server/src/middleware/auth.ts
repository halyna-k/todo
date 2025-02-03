import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import jwksRsa from 'jwks-rsa';
var { expressjwt: jwt } = require("express-jwt");

dotenv.config();

// middleware to check JWT and attach user info to the request
export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
  requestProperty: "user",
}).unless({
  path: ['/tasks'],
});

// error handler for unauthorized access
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ message: 'Invalid or expired token' });
  }
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
};

// middleware to attach user ID to the request
export const authenticateUser = (req: Request, res: Response, next: NextFunction): void => {
  const user = (req as any).user as { sub: string };

  if (!user || !user.sub) {
    console.error('User ID not found in token:', user);
    res.status(401).send({ message: "Unauthorized: User ID not found in token" });
  }

  req.body.user_id = user.sub; 
  console.log("Request body after adding user_id:", req.body);

  next();
};
