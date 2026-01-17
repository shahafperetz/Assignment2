import { Request, Response } from "express";
import Comment from "../models/Comment";

export const createComment = async (req: Request, res: Response) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};

export const getCommentByPost = async (req: Request, res: Response) => {
    try {
        const { postId } = req.query;
        const comments = await Comment.find({ postId });
        res.json(comments);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};