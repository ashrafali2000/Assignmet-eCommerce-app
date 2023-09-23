import fs from "fs";
import path from "path";
import bcrypt from "bcrypt"

const usersFilePath = path.join(process.cwd(), "src", "dataBase", "users.json");

const getAllUsers = () => {
  const users = fs.readFileSync(usersFilePath);
  return JSON.parse(users);
};
 
export const findUserByEmail = (email) => {
  const { users } = getAllUsers();
  return users.find((user) => user.email === email);
};

export const createUser = async (firstName, lastName, email, password, image) => {
  const { users } = getAllUsers();
  const userFound = findUserByEmail(email);
  
  if(userFound){
    throw new Error("User already exist");
  }

  const hashPassword = await bcrypt.hash(password, 12);
  users.push({id: users.length + 1,  firstName, lastName, email, password : hashPassword , image, products: [] });
  fs.writeFileSync(usersFilePath, JSON.stringify({ users }));
};
