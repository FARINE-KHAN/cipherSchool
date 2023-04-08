import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    image:String,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    password: String,
        
});


const postUser = mongoose.model('user', userSchema);

export default postUser;