import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("connected to MongoDB");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;