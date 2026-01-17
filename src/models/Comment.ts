import mongoose, {Schema, Document, Types} from "mongoose";

export interface IComment extends Document {
    userId: Types.ObjectId;
    postId: Types.ObjectId;
    text: string;
    createdAt: Date;
    updatedAt: Date;
};

const CommentSchema: Schema<IComment> = new Schema (
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true
        },
        text: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model<IComment>('Comment', CommentSchema);
export default Comment;