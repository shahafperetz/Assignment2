import { Router } from "express";
import { createComment, getCommentByPost } from "../controllers/comment.controller";

const router = Router();

router.post('/', createComment);
router.get('/', getCommentByPost);

export default router;