import mongoose, { connect } from 'mongoose';

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connection established`)

    } catch (error) {
        console.error(`Failed to connect to DB : ${error}`)   
        throw error
    }
}

export default connectDB