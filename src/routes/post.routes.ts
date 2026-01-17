import { Router } from "express";
import { createPost, getPosts, getPostById } from "../controllers/post.controller";

const router = Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);

export default router;
