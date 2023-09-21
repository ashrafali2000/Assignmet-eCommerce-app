import { useContext } from "react"
import UserContext from "../userContext"
import Dashboard from "@/pages/dashBoard";

export default function AuthHandler (){
    const userCtx = useContext(UserContext);
    return userCtx.isLoggedIn ? <Dashboard></Dashboard> : ""

}