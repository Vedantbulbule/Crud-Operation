import mongoose from 'mongoose';

const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-dbtywzl-shard-00-00.nuje696.mongodb.net:27017,ac-dbtywzl-shard-00-01.nuje696.mongodb.net:27017,ac-dbtywzl-shard-00-02.nuje696.mongodb.net:27017/?ssl=true&replicaSet=atlas-l4qi5a-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('database connected succesfully')
    } catch (error) {
        console.log('error while connecting with db', error)
    }
}
export default Connection;