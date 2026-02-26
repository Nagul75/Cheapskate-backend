import { Router } from "express";
import {
  login,
  logout,
  refresh,
  registerUser,
} from "../controllers/authController";
import { authenticate } from "../middleware/authenticate";
const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", login);
authRouter.post("/refresh", refresh);
authRouter.post("/logout", logout);

authRouter.get("/me", authenticate, (req, res) => {
  res.json({ user: req.user });
});

export default authRouter;
