import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },

    password: {
        type: String, 
        required: true,
        min: 6
    },

    image: {
        type: String
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    img: {
        type: String
    },

    userId: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

// if User Exist use existing user if not create a model named User with userSchema
// for mongoose.model first argument is the collection Name and the second argument is the Schema

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.User || mongoose.model("Post", postSchema);

