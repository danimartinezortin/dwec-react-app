import { useState } from "react";
import { getAllUsers, deleteUser } from "../../services/userApiCall";

const UserList = () => {
    const [userList, setUserList] = useState([]);


    return {
        userList, setUserList, getAllUsers, deleteUser
    }
}

export {UserList};