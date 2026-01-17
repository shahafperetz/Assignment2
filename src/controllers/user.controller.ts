import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};

export const getUsers = async (req: Request, res: Response) => {
   try {
    const users = await User.find();
    res.json(users);
   } catch (err: any) {
    res.status(500).json({ message: err.message });
   };
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: " User not found "});
        return res.json(user);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};
