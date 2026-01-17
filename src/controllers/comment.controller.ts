import { Request, Response } from "express";
import Comment from "../models/Comment";
import { AuthRequest } from "../middleware/auth.middleware";

export const createComment = async (req: AuthRequest, res: Response) => {
  try {
    const comment = new Comment({
      text: req.body.text,
      postId: req.body.postId,
      userId: (req.user as any).userId
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
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

export const getCommentById = async (req: Request, res: Response) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: "Comment not found" });
        res.json(comment);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};

export const updateComment = async (req: Request, res: Response) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comment) return res.status(404).json({ message: "Comment not found" });
        res.json(comment);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};

export const deleteComment = async (req: Request, res: Response) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) return res.status(404).json({ message: "Comment not found" });
        res.json({ message: "Comment deleted successfully" });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};