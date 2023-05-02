import React from "react";
import {UserCreate} from './userCreate';
import Input from "./components/input";

const  CreateUserView = (props) => {

    const {user, setUser, handlePost} = {...UserCreate()};
    const handleInputChange = (ev) => {
        setUser({...user, [ev.target.name]: ev.target.value})
    }

    const sendData = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if(
            user.name === "" ||
            user.email === "" ||
            user.username === ""
        ) {
            console.error("Required data is not filled correctly")
        } else {
            handlePost(user)
        }
    }

    return (
        <form onSubmit={sendData}>
            <Input name="name" id="name" type="text" label="Nombre" onChange={handleInputChange}></Input>
            <Input name="email" id="email" type="email" label="Correo electrónico" onChange={handleInputChange}></Input>
            <Input name="username" id="username" type="text" label="username" onChange={handleInputChange}></Input>
            <button type="submit">Registrar</button>
        </form>
    );
}

export default CreateUserView;