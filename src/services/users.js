import fs from "fs";
import path from "path";

const usersFilePath = path.join(process.cwd(), "src", "dataBase", "users.json");

const getAllUsers = () => {
  const users = fs.readFileSync(usersFilePath);
  return JSON.parse(users);
};

const findUserByEmail = (email) => {
  const { users } = getAllUsers();
  return users.find((user) => user.email === email);
};

export const createUser = (firstName, lastName, email, password, image) => {
  const { users } = getAllUsers();

  users.push({ firstName, lastName, email, password, image, products: [] });

  fs.writeFileSync(usersFilePath, JSON.stringify({ users }));
};
