// import { Request, Response } from "express";
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken";
// import User from "../models/User";
// import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

// export const register = async (req: Request, res: Response) => {
//     try {
//         const { username, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new User({
//             username,
//             email, 
//             password: hashedPassword
//         });

//         await user.save();
//         res.status(201).json({ message: "User regidtered" });
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     };
// };

// export const login = async (req: Request, res: Response) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });
//         if (!user) return res.status(401).json({ message: "Invalid credentials" });

//         const isPasswordMatching = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatching) return res.status(401).json({ message: "Invalid credentials" });

//         const accessToken = generateAccessToken(user._id.toString());
//         const refreshToken = generateRefreshToken(user._id.toString());

//         user.refreshToken = refreshToken;
//         await user.save();
        
//         res.json({ accessToken, refreshToken });
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     };
// };

// export const refresh = async (req: Request, res: Response) => {
//     try {
//         const { refreshToken } = req.body;
//         if(!refreshToken) return res.status(401).send();

//         const user = await User.findOne({ refreshToken });
//         if (!user) return res.status(403).send();

//         jwt.verify(
//             refreshToken,
//             process.env.REFRESH_TOKEN_SECRET || "",
//             (err: any) => {
//                 if (err) return res.status(403).send();

//                 const accessToken = generateAccessToken(user._id.toString());
//                 res.json({ accessToken });
//             }
//         );
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     };
// };

// export const logout = async (req: Request, res: Response) => {
//     const { refreshToken } = req.body;
//     if (!refreshToken) return res.status(204).send();

//     const user = await User.findOne({ refreshToken });
//     if (user) {
//         user.refreshToken = undefined;
//         await user.save();
//     };

// res.status(204).send();
// };