import express from 'express';
import userRoutes from './routes/user.routes';
import postRoutes from './routes/post.routes';
import commentRoutes from './routes/comment.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/auth', authRoutes);

export default app;
 