import React from "react";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserDetail from "./pages/userDetail/UserDetail";
import NewUser from "./pages/newUser/NewUser";

function App() {

  return (
    // <Router className="App">
    //   <Topbar />
    //   <div className="container">
    //       <Sidebar />
    //       <Switch>
    //         <Route exact path="/">
    //           <Home/>
    //         </Route>
    //         <Route exact path="/users">
    //           <UserList/>
    //         </Route>           
    //       </Switch>
    //   </div>
    // </Router>
    //     <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/users" element={<UserList/>} />
    // </Routes>
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userID" element={<UserDetail />} />
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
