import {Schema, model, models} from "mongoose"; 

export const userSchema = new Schema({ 
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

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    img: {
        type: String,
        default: "https://images.twinkl.co.uk/tr/raw/upload/u/ux/usawiki-fish-clownfish_ver_1.jpg"
    },

    userid: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

export const User = models?.User || model('User', userSchema); 
export const Post = models?.Post || model('Post', postSchema); 