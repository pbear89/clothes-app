import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_KEY ||
      "0pKCbw9W596ckaYBOIrVimVNyD6Dj6T4MZINsxZQZA3C0lA92G3evVv-AUqI0pZU",
    {
      expiresIn: "30d",
    }
  );
};
