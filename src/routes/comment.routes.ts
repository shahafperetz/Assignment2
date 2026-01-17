import { Router } from "express";
import { createComment, getCommentByPost } from "../controllers/comment.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post('/', authenticate, createComment);
router.get('/', getCommentByPost);

export default router;