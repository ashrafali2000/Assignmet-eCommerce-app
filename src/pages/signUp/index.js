import Form from "@/components/form";

export default  function SignUp(){

   const onFormSubmit = (firstName,lastName,email, password,image) => {

    const newUser = JSON.stringify({firstName,lastName,email,password,image});

     fetch("/api/userApi/signUp",{
        method:"POST",
        body:newUser,
        headers:{
            "Content-Type": "application/json",
        }
     })
    //  .then((res) => res.json())
    //  .then((allUsers) => console.log(allUsers));
   }

    return(<div>
        <Form signUp  onFormSubmit = {onFormSubmit} ></Form>
    </div>)
}