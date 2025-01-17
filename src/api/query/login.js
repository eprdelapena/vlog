'use server'

import { signIn} from '@/lib/auth';


export const login = async (previousState, formData) => {
    const Uusername = formData.get("username"); 
    const Upassword = formData.get("password");
    try{
        await signIn("credentials", {Uusername, Upassword, redirect: true});
        
    }
    catch(error){
        return {errors: "Invalid username or password"}
    }

}
