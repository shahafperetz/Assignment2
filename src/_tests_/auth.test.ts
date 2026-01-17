
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app';

describe('Auth API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI as string);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  const user = {
    username: 'authuser',
    email: 'authuser@test.com',
    password: '123456'
  };

  let refreshToken = '';

  it('should register user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send(user);

    expect(res.status).toBe(201);
  });

  it('should login user', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        username: user.username,
        password: user.password
      });

    expect(res.status).toBe(200);
    expect(res.body.accessToken).toBeDefined();
    expect(res.body.refreshToken).toBeDefined();

    refreshToken = res.body.refreshToken;
  });

  it('should refresh access token', async () => {
    const res = await request(app)
      .post('/auth/refresh')
      .send({ refreshToken });

    expect(res.status).toBe(200);
    expect(res.body.accessToken).toBeDefined();
  });

  it('should logout user', async () => {
    const res = await request(app)
      .post('/auth/logout')
      .send({ refreshToken });

    expect(res.status).toBe(204);
  });
});

