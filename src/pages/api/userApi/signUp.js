import { createUser } from "@/services/users";

export default function handler(req, res) {

    if(req.method === "POST"){
      const {firstName,lastName, email, password, image} = req.body;
      const userCreate = createUser(firstName,lastName,email,password,image);
      res.status(201).json(userCreate);
    }
    
  }