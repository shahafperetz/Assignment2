import { Router } from "express";
import { createComment, deleteComment, getCommentById, getCommentByPost, updateComment } from "../controllers/comment.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();


/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comments management
 */

/**
 * @swagger
 * /comments:
 *   post:
 *      summary: Create a new comment (protected)
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - postId
 *               - text
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 64f1c9a9e1b2c123456789ab
 *               postId:
 *                 type: string
 *                 example: 64f1c9a9e1b2c123456789ac
 *               text:
 *                 type: string
 *                 example: Nice post!
 *     responses:
 *       201:
 *         description: Comment created
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post('/', authenticate, createComment);

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get comments by post
 *     tags: [Comments]
 *     parameters:
 *      - in: query
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: List of comments
 */
router.get('/', getCommentByPost);

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Get a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         responses:
 *       200:
 *         description: Comment found
 *       404:
 *         description: Comment not found
 */
router.get('/:id', getCommentById);

/**
 * @swagger
 * /comments/{id}:
 *   put:
 *     summary: Update comment by ID
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: Updated comment
 *     responses:
 *       200:
 *         description: Comment updated
 *       404:
 *         description: Comment not found
 */
router.put('/:id', updateComment);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete comment by ID
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Comment deleted
 *       404:
 *         description: Comment not found
 */
router.delete('/:id', deleteComment);

export default router;