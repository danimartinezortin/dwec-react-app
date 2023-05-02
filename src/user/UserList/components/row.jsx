import React from "react";

const UserRow = (props) => {

    return (
        <div>
            <div>
                Name: {props.name} 
            </div>
            <div>
                Username: {props.username} 
            </div>
            <div>
                Email: {props.email} 
            </div>
            {props.deleteAction}
            <hr></hr>
        </div>
        
    );
}

export default UserRow;