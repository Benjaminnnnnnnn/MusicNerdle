import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import User from './User';
configDotenv();

@Injectable()
export class DatabaseService {
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
  async createUser() {
    try {
      await this.connectDB();

      const newUser = new User({
        name: 'Ben',
        email: 'benaylward87@gmail.com',
        age: '20',
      });

      const savedUser = await newUser.save();
      console.log('User saved to Mongo: ', savedUser);
    } catch (err) {
      console.error(err);
    }
    mongoose.disconnect();
  }
  async getUserInfo() {
    try {
      await this.connectDB();

      const user = await User.findOne({ email: 'benaylward87@gmail.com' });
      console.log('User found:', user);
    } catch (error) {
      console.error('Error finding user:', error);
    }
    mongoose.disconnect();
  }
}
