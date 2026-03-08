export interface JWTPayload {
  sub: string;
  email: string;
  name: string | null;
}

export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string | null;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}
