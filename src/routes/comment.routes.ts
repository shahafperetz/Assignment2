import { Router } from "express";
import { createComment, deleteComment, getCommentById, getCommentByPost, updateComment } from "../controllers/comment.controller";

const router = Router();

router.post('/', createComment);
router.get('/', getCommentByPost);
router.get('/:id', getCommentById);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;