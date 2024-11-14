import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the User document (extends mongoose Document)
interface IUser extends Document {
  name: string;
  email: string;
  age: number;
}

// Define the schema for the User model
const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Create the model using the schema and the IUser interface
const User = mongoose.model<IUser>('User', userSchema);

// Export the model
export default User;
