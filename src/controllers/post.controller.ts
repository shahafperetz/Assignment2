// import { Request, Response } from "express";
// import Post from "../models/Post";
// import { AuthRequest } from "../middleware/auth.middleware";

// export const createPost = async (req: AuthRequest, res: Response) => {
//   try {
//     const post = new Post({
//       content: req.body.content,
//       userId: (req.user as any).userId
//     });

//     await post.save();
//     res.status(201).json(post);
//   } catch (err: any) {
//     res.status(500).json({ message: err.message });
//   }
// };


// export const getPosts = async (req: Request, res: Response) => {
//     try {
//         const { userId } = req.query;
//         if (!userId) {
//             const posts = await Post.find();
//             res.json(posts);
//         } else {
//             const posts = await Post.find({ userId });
//             res.json(posts);
//         }
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     };
// };

// export const getPostById = async (req: Request, res: Response) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) return res.status(404).json({ message: "Post not found" });
//     res.json(post);
//   }  catch (err: any) {
//     res.status(500).json({ message: err.message });
//   };
// };


// export const updatePost = async (req: Request, res: Response) => {
//     try {
//         const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!post) return res.status(404).json({ message: "Post not found" });
//         res.json(post);
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     };
// };

// export const deletePost = async (req: Request, res: Response) => {
//     try {
//         const post = await Post.findByIdAndDelete(req.params.id);
//         if (!post) return res.status(404).json({ message: "Post not found" });
//         res.json({ message: "Post deleted successfully" });
//     } catch (err: any) {
//         res.status(500).json({ message: err.message });
//     };
// };