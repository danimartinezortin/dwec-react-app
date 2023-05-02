import './App.css';
import { BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Nav} from './components/navbar';
import CreateUserView from './user/UserCreate/userCreateView';
import UserListView from './user/UserList/UserListView';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path="/add" element={<CreateUserView />}/>
          <Route path="/" element={<UserListView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
