import { Router } from "express";
import { createPost, getPosts, getPostById, deletePost, updatePost } from "../controllers/post.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Posts management
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post (protected)
 *     tags: [Posts]
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
 *               - content
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 64f1c9a9e1b2c123456789ab
 *               content:
 *                 type: string
 *                 example: My first post
 *     responses:
 *       201:
 *         description: Post created
 *       401:
 *         description: Unauthorized
 */
router.post('/', authenticate, createPost);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts or posts by userId
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: false
 *         schema:
 *           type: string
 *         description: Filter posts by user ID
 *     responses:
 *       200:
 *         description: List of posts
 */
router.get('/', getPosts);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post found
 *       404:
 *         description: Post not found
 */
router.get('/:id', getPostById);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update post by ID
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: Updated post content
 *     responses:
 *       200:
 *         description: Post updated
 *       404:
 *         description: Post not found
 */
router.put('/:id', updatePost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete post by ID
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Post deleted
 *       404:
 *         description: Post not found
 */
router.delete('/:id', deletePost);

export default router;