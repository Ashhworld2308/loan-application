// import logo from './logo.svg';
// import './App.css';
// import ApplicationTracker from './components/applicationTracker/ApplicationTracker';

// function App() {
//   return (
//     <div className="App">
//       <ApplicationTracker />
//     </div>
//   );
// }

// export default App;



import "./App.css";
import React, { useState } from "react";
import Header from "./components/common/Header";
import ApplicationTracker from "./components/applicationTracker/ApplicationTracker";
import SideBar from "./components/common/SideBar";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const user = {
    name: "Thammayya",
    role: "BANK_MANAGER",
    id: "1",
  };
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} user={user} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        user={user}
      />
      <ApplicationTracker />
    </div>
  );
}
export default App;