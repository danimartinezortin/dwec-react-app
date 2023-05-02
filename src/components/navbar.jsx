import {NavLink} from "react-router-dom";
const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">User List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
    </nav>
    );
}

export {Nav};
