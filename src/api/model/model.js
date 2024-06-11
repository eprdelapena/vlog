import { User, Post } from "../schema/schema";
import mongoose from "mongoose";

export const createUser = (collectionName, userName, userEmail, userPassword, userImage = null, userAdmin = false) => {

    const singleUser = new User({
        __id: mongoose.Types.ObjectId,
        username: userName,
        email: userEmail,
        password: userPassword,
        image: userImage,
        isAdmin: userAdmin
    });
    
    singleUser.save();
    console.log("Data Added");
    return;
}

export const createPost = (userTitle, userDesc, userImg, id, userSlug) => {
    const singlePost = new Post({
        __id: mongoose.Types.ObjectId,
        title: userTitle,
        desc: userDesc,
        img: userImg,
        userID: id,
        slug: userSlug
    });

    singlePost.save();
    console.log("Data Added");
    return;
}
