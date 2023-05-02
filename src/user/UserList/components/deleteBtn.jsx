import React from "react";

const DeleteBtn = (props) => {

    return (
        <button onClick={props.delete}>
            Borrar
        </button>        
    );
}

export default DeleteBtn;