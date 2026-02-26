import { Request, Response, NextFunction } from "express";
import { verifyAccessToken, TokenError } from "../services/tokenService";

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ error: "Missing or malformed authorization header" });
    return;
  }

  const token = authHeader.slice(7);

  try {
    const payload = await verifyAccessToken(token);
    req.user = { id: payload.sub, email: payload.email };
    next();
  } catch (err: any) {
    console.error("JWT verify error:", err.code, err.message);

    if (err.code === "ERR_JWT_EXPIRED") {
      res.status(401).json({ error: "Token expired" });
      return;
    }
    res.status(401).json({ error: "Invalid token" });
  }
}
