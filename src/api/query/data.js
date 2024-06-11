import { connectToDB } from "../connectDB/connectDB"; 
import {Schema, model, models} from "mongoose"; 
import { unstable_noStore as noStore } from 'next/cache'; 
import { revalidatePath } from "next/cache"; 
import { redirect } from "next/navigation";

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

const User = models.User || model('User', userSchema); 
const Post = models.Post || model('Post', postSchema); 

export const getUser = async (user) => { 
    noStore();
    try{
        connectToDB(); 
        const users = await User.find({"username": user}); 
        return users[0]; 
    }
    catch(error){
        console.error(error);
    }
}

export const getPosts = async () => { 
    noStore();
    try{
        connectToDB(); 
        const posts = await Post.find(); 
        return posts; 
    }
    catch(error){
        console.error(error);
    }
}

export const getSinglePosts = async (user) => { 
    noStore();
    try{
        connectToDB();
        const singlePost = await Post.find({"userid": user}); 
        return singlePost[0]; 
    }
    catch(error){
        console.error(error);
    }
}

export const addData = async (formData) => { 
    "use server";  
    const Utitle = formData.get("usertitle"); 
    const Udesc = formData.get("userdescription");
    const Uimg = formData.get("userimg");
    const Uslug = formData.get("userslug");
    const Uuserid = formData.get("userid");

    const post = new Post({ //1. add user schema new objecct
        title: Utitle,
        desc: Udesc,
        img: Uimg,
        userid: Uuserid,
        slug: Uslug
    });
    try{
        connectToDB(); //2. connect to the database
        post.save(); //3. then save
        console.log("Successfully saved to database");
        revalidatePath("/blog"); //4. this purge all cache data thus allowing new data to redirect and appear immediately
        redirect("/blog"); //5. redirect to /blog import redirect from next/navigation
    }
    catch(error){
        console.error(error);
    }

}

export const deleteData = async (formData) => { 
    "use server";  
    const Uusername = formData.get("userid"); 
    
    try{
        connectToDB(); //2. connect to the database
        const deletePost = await Post.deleteOne({userid: Uusername})
        console.log("Successfully deleted to database");
        revalidatePath("/blog"); //4. this purge all cache data thus allowing new data to redirect and appear immediately
        redirect("/blog"); //5. redirect to /blog import redirect from next/navigation
    }
    catch(error){
        console.error(error);
    }

}

