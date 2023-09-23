import { createUser } from "@/services/users";

export default function handler(req, res) {
     if(req.method !== "POST"){
      res.status(400).send();
     }
    try{
      const {firstName,lastName, email, password, image} = req.body;
      const userCreate = createUser(firstName,lastName,email,password,image);
      res.status(201).json(userCreate);
    }catch(err){
      res.status(400).json({message : err.message})
    }
   
  }