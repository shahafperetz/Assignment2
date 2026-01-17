import { Router } from "express";
import { createPost, getPosts, getPostById, deletePost, updatePost } from "../controllers/post.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post('/', authenticate, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
export default router;
