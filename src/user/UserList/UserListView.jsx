import React, {useEffect} from "react";
import {UserList} from './UserList';
import UserRow from "./components/row";
import DeleteBtn from "./components/deleteBtn";
const  UserListView = (props) => {
    
    const {userList, setUserList, getAllUsers, deleteUser} = {...UserList()}
    useEffect(() => {
        getAllUsers().then(res => setUserList(res.data.users))
      }, []);
      const handleDelete = (id) => {
        deleteUser(id);
        getAllUsers().then(res => setUserList(res.data.users))
      }
    return (
        <div>
            {userList.map(i => <UserRow key={i.id} id={i.id} name={i.name} username={i.username} email={i.email} deleteAction={<DeleteBtn delete={ () => handleDelete(i.id)}></DeleteBtn>} edit="todo"></UserRow>)}
        </div>
    );
}

export default UserListView;