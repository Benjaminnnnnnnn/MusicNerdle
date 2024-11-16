import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  topfour: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
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
});

// Create the model using the schema and the IUser interface
const User = mongoose.model<IUser>('User', userSchema);

// Export the model
export default User;
