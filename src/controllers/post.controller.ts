import { Request, Response } from "express";
import Post from "../models/Post";

export const createPost = async (req: Request, res: Response) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};

export const getPosts = async (req: Request, res: Response) => {
    try {
        const { userId } = req.query;
        if (!userId) {
            const posts = await Post.find();
            res.json(posts);
        } else {
            const posts = await Post.find({ userId });
            res.json(posts);
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    };
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  }  catch (err: any) {
    res.status(500).json({ message: err.message });
  };
};
