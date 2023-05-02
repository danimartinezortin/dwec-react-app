import axios from "axios"

const api = "http://10.0.2.129:8080/users";

const postUser = (data, args) => {
    axios.post(api, data)
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

const getAllUsers = () => {
    return axios.get(api)
    .then(res => res)
    .catch(err => console.error(err));
}

const deleteUser = (id) => {
    return axios.delete(api+ `/${id}`)
    .then(res => res)
    .catch(err => console.error(err));
}

export {postUser, getAllUsers, deleteUser};