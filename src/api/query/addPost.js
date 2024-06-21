"use server";  

import { connectToDB } from "../connectDB/connectDB"; 
import { revalidatePath } from "next/cache"; 
import { isImgUrl } from "./checkImage";

import {Schema, model, models} from "mongoose"; 


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

export const Post = models?.Post || model('Post', postSchema); 

export const addData = async (previousState, formData) => { 

    const Utitle = formData.get("usertitle"); 
    const Udesc = formData.get("userdescription");
    const Uimg = formData.get("userimg");
    const Uslug = formData.get("userslug");
    const Uuserid = formData.get("userid");

    const errorLists = {}

    if(!Utitle){
        errorLists.errorTitle = "*Please provide title";
    }
    if(!Udesc){
        errorLists.errorDescription = "*Please provide description";
    }
    if(!Uimg){
        errorLists.errorImage = "*Please provide a valid image link";
    }
    if(Uimg){
        if(isImgUrl(Uimg) === false){
            errorLists.errorImage ="*invalid image link";
        }
    }
    if(!Uslug){
        errorLists.errorSlug = "*Please provide a short description";
    }
    if(!Uuserid){
        errorLists.errorUsername = "*Please provide a valid username";
    }

    let objectLength = Object.keys(errorLists).length;
    if(objectLength > 0){
        return errorLists;
    }

    const post = new Post({ 
        title: Utitle,
        desc: Udesc,
        img: Uimg,
        userid: Uuserid,
        slug: Uslug
    });

    try{
        connectToDB(); 
        post.save(); 
        console.log("Successfully saved to database");
        // revalidatePath("/blog"); 
        return {success: true}
    }

    catch(error){
        console.error(error);
    }

}