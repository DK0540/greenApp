import "./App.css";
import React, { useState } from "react";
// import Footer from "./Components/Pages/Footer";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import EmployeeProductiveDashboard from "./components/EmployeeProductiveDashboard";
import UserPage from "./components/UserPage";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";

function App() {
  const [sideNavbarOpen, setSideNavbarOpen] = useState(false);

  const handleBurgerClick = () => {
    setSideNavbarOpen(!sideNavbarOpen);
  };

  const handleCloseSidebar = () => {
    setSideNavbarOpen(false);
  };
  return (
    <>
      <Router>
        <Header onBurgerClick={handleBurgerClick} />

        <SideNavbar isOpen={sideNavbarOpen} onClose={handleCloseSidebar} />
        <Routes>
          <Route path="/logo" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/EmployeeProductiveDashboard"
            element={<EmployeeProductiveDashboard />}
          />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//=========================================Last one okay
// import "./App.css";
// import React, { useState } from "react";
// // import Footer from "./Components/Pages/Footer";
// import "./styles.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
// import EmployeeProductiveDashboard from "./components/EmployeeProductiveDashboard";
// import UserPage from "./components/UserPage";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/logo" element={<Login />} />
//           <Route
//             path="/EmployeeProductiveDashboard"
//             element={<EmployeeProductiveDashboard />}
//           />
//           <Route path="/user" element={<UserPage />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

//=========================================>>
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
// import EmployeeProductiveDashboard from "./components/EmployeeProductiveDashboard";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/employeeProductiveDashboard"
//           component={EmployeeProductiveDashboard}
//         />
//         <Route
//           path="/forgotPassword"
//           render={() => <div>Forgot Password</div>}
//         />
//         <Route path="/" component={Login} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
