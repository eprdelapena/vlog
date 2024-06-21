"use server";

import { connectToDB } from "../connectDB/connectDB"; 
import bcrypt from 'bcryptjs'; //1. import bcrypt
import { User } from "../model/userSchema";

export const addUser = async (previousState, formData) => { 
    
    const Uusername = formData.get("username"); 
    const Uemail = formData.get("email");
    const Upassword = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if(Upassword !== confirmPassword){
        return {error: "Password do not match"}; //1. add errors through an object
    }

    try{
        connectToDB();
        const singleUser = await User.findOne({"email": Uemail}); 
        if(singleUser){
            return {error: "User already exists"}; //2. add errors through an object
        }

        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(Upassword, salt); 

        const user = new User({ 
            username: Uusername,
            email: Uemail,
            password: hashedPassword, 
        });

        user.save(); 
        console.log("Successfully saved to database");
        return {success: true}; //3. if success return success true as an object
    }
    catch(error){
        console.error(error);
    }

}

