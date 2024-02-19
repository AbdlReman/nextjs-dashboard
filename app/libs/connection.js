import mongoose from 'mongoose'

export const connectDB = async () => {
    const connected = {};
    if (connected.isConnected) return;
    try {
        const db = await mongoose.connect(process.env.MONGO_LINK)
        connected.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error)
    }

}