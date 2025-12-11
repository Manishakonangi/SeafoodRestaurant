import User from "../models/User.js";
import bcrypt from "bcryptjs";

// REGISTER (NO JWT)
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    await User.create({ name, email, password: hashed });

    res.send({ success: true });
  } catch (err) {
    res.status(400).send({ msg: "Email already exists" });
  }
};

// LOGIN (NO JWT)
export const login = async (req, res) => {
  const { email, password } = req.body;

  // find user
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ msg: "Invalid email" });

  // check password
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).send({ msg: "Wrong password" });

  // Return only user info (no token)
  res.send({
    success: true,
    user: {
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
};
