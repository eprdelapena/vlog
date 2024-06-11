export const captureFormData = async (formData) => { //2. Create this function to capture data from form use formData as an argument which is built in
    "use server"; // 3. use use Server
    const Utitle = formData.get("usertitle"); //4. get form variables which is the input name
    const Udesc = formData.get("userdescription");
    const Uimg = formData.get("userimg");
    const Uslug = formData.get("userslug");
    const Uuserid = formData.get("userid");

    console.log(title, desc, img, slug, userid); //5. print the output
}

