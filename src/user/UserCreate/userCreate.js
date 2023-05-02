import { useState } from "react";
import { postUser } from "../../services/userApiCall";

const UserCreate = () => {
    const [user, setUser] = useState({name:"", email:"", username:""});
    
    const handlePost = (data, args) => {
        postUser(data, args);
    }

    return {
        user, setUser, handlePost
    }
}

export {UserCreate};