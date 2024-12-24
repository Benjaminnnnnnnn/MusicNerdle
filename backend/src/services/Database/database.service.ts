import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import User from './schemas/User';
import { user } from 'src/types';
import { randomUUID } from 'crypto';
configDotenv();

@Injectable()
export class DatabaseService {
  constructor() {
    this.connectDB();
  }
  async connectDB() {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
      });
  }
  async createUser(email: string, username: string, password: string) {
    try {
      const userInfo = {
        id: String(randomUUID()),
        email,
        username,
        password,
        topfour: {
          one: '',
          two: '',
          three: '',
          four: '',
        },
        friends: [],
      };
      const newUser = new User(userInfo);
      console.log(newUser);
      const savedUser = await newUser.save();
      console.log('User saved to Mongo: ', savedUser);
    } catch (err) {
      console.error(err);
    }
  }
  async getUserInfo() {
    try {
      await this.connectDB();

      const user = await User.findOne({ email: 'benaylward87@gmail.com' });
      console.log('User found:', user);
    } catch (error) {
      console.error('Error finding user:', error);
    }
  }
}
