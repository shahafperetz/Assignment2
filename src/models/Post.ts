import mongoose, {Schema, Document, Types} from "mongoose";

export interface IPost extends Document {
    userId: Types.ObjectId;
    content: string;
    createdAt: Date;
    updatedAt: Date;
};

const PostSchema: Schema<IPost> = new Schema (
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
            required: true, 
            trim: true
        }
    }, 
    {
        timestamps: true
    }
);

const Post = mongoose.model<IPost>('Post', PostSchema);
export default Post;
