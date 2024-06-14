import { connectToDB } from '@/api/connectDB/connectDB';
import dotenv from 'dotenv';
dotenv.config();

import NextAuth from "next-auth";
import { User } from '@/api/query/data';
import Github from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials' //1. import this
import bcrypt from 'bcryptjs' //5. import bcrypt for password comparison


//2. create login function that connects to the database and checks user 
const login = async (credentials) => {
    console.log(credentials);
    try{
        connectToDB(); //3. create function that will connect to the database
        const user = await User.findOne({username: credentials.Uusername}); //4. find username in that database User is a mongoose model schema see other tutorials
        console.log(credentials.Upassword);
        console.log(user);
        if(!user){
            throw new Error("User not found");
        }
        
        const isPasswordCorrect = await bcrypt.compare(credentials.Upassword, user.password);
        console.log(isPasswordCorrect);
        if(!isPasswordCorrect){
            throw new Error("Password do not match");
        }

        return user; //6. if right return user
    }
    catch(error){
        console.error(error);
        throw new Error("Failed to Login");
    }
}
export const {handlers:{GET, POST}, auth, signIn, signOut} = NextAuth({ 
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({ //7. write this code
            async authorize(credentials){
                try{
                    const user = await login(credentials);
                    if(user){
                        console.log("successfully login");
                        console.log(user);
                    }
                    return user;
                }
                catch(error){
                    return null;
                }
            }
        })

    ],
    callbacks: 
    {
        async signIn({user, account, profile}){ 
            if(account.provider === "github"){  
                connectToDB(); 
                try{
                    const user = await User.findOne({email: profile.email}); 
                    if(!user){
                        try{
                            const newUser = new User({ 
                                username: profile.login,
                                email: profile.email,
                                password: "1234asdfasdf",
                                image: profile.avatar_url
                            })
    
                            await newUser.save(); 
                        }
                        catch(error){ 
                            console.error(error);
                            return false;
                        }
                    }
                    return true;  
                }
                catch(error){

                }
            }
            return true;
        }
    },
});

