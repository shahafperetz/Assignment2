import mongoose, {Schema, Document} from "mongoose";

export interface IUSer extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

const UserSchema: Schema<IUSer> = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true // check this one
        }, 
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true, // check this one
            trim: true // check this one
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model<IUSer>('User', UserSchema);

export default User;