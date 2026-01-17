

import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app';

let token = '';
let commentId = '';
let userId = '';
let postId = '';

describe('Comments API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI as string);

    // Register user
    const register = await request(app).post('/auth/register').send({
      username: 'commentuser',
      email: 'commentuser@test.com',
      password: '123456'
    });

    // Login
    const login = await request(app).post('/auth/login').send({
      username: 'commentuser',
      password: '123456'
    });

    token = login.body.accessToken;

    // Get userId from token payload
    const payload = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString()
    );
    userId = payload.userId;

    // Create post
    const postRes = await request(app)
      .post('/posts')
      .set('Authorization', Bearer ${token})
      .send({
        userId,
        content: 'post for comment'
      });

    postId = postRes.body._id;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create comment', async () => {
    const res = await request(app)
      .post('/comments')
      .set('Authorization', Bearer ${token})
      .send({
        userId,
        postId,
        text: 'jest comment'
      });

    expect(res.status).toBe(201);
    commentId = res.body._id;
  });

  it('should get comment by id', async () => {
    const res = await request(app).get(/comments/${commentId});
    expect(res.status).toBe(200);
  });
});