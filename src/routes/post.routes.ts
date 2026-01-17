import { Router } from "express";
import { createPost, getPosts, getPostById } from "../controllers/post.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post('/', authenticate, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);

export default router;
