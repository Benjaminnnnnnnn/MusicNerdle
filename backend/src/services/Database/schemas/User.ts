import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  topfour: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
  friends: [string];
}

// Define the schema for the User model
const userSchema: Schema<IUser> = new Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  topfour: {
    one: { type: String },
    two: { type: String },
    three: { type: String },
    four: { type: String },
  },
  friends: {
    type: [String],
    required: false,
  },
});

// Create the model using the schema and the IUser interface
const User = mongoose.model<IUser>('User', userSchema);

// Export the model
export default User;
