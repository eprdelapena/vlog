"use client"; 

import React, {useEffect} from 'react';
import { addData } from '@/api/query/addPost';
import styles from './add.module.css';
import { useFormState } from "react-dom";
import { useRouter } from 'next/navigation'; 



const page = () => {
  const [state, formAction] = useFormState(addData, undefined); 
  const router = useRouter();
  useEffect(() => {
    if(state?.success !== null && state?.success === true){
      alert("Successfully added post! redirecting to /blog");
      router.push("/blog");
    }
  }, [state, router]);


  return (
    <>
      <div className={styles.parentContainer}> 
        <div className={styles.container}>
          <h2 className={styles.headingTwo}> Insert Post </h2>
          <form action={formAction}> 
          
            <input className={styles.inputContainer} type="text" name="usertitle" placeholder="Insert Title..." />
            {state?.errorTitle && state.errorTitle} 
            <input className={styles.inputContainer} type="text" name="userdescription" placeholder="Insert Description..." />
            {state?.errorDescription && state.errorDescription} 
            <input className={styles.inputContainer} type="text" name="userimg" placeholder="Insert Image Link..." />
            {state?.errorImage && state.errorImage} 
            <input className={styles.inputContainer} type="text" name="userid" placeholder="Insert username..." />
            {state?.errorUsername && state.errorUsername} 
            <input className={styles.inputContainer} type="text" name="userslug" placeholder="Insert Slug..." />
            {state?.errorSlug && state.errorSlug} 
            <input className={styles.submitButton} type="submit"/>
        </form>   
        
        </div>
      </div>
        
    </>

  )
}

export default page