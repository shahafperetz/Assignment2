
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app';

let token = '';
let postId = '';

describe('Posts API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI as string);

    await request(app).post('/auth/register').send({
      username: 'postuser',
      email: 'postuser@test.com',
      password: '123456'
    });

    const login = await request(app).post('/auth/login').send({
      username: 'postuser',
      password: '123456'
    });

    token = login.body.accessToken;
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create post (protected)', async () => {
    const res = await request(app)
      .post('/posts')
      .set('Authorization', Bearer ${token})
      .send({
        userId: 'dummy',
        content: 'jest post'
      });

    expect(res.status).toBe(201);
    postId = res.body._id;
  });

  it('should get all posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).toBe(200);
  });

  it('should get post by id', async () => {
    const res = await request(app).get(/posts/${postId});
    expect(res.status).toBe(200);
  });
});