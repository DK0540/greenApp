import React from "react";
import styled from "styled-components";
import { FaHome, FaChartLine, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../components/assets/green.png";

const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #59d9cc;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
`;

const SidebarHeader = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  margin-top: -60px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h2 {
    color: black;
    margin: 0;
    ement.style {
      font-family: 'Oswald', sans-serif;
  }

  p {
    color: black;
    margin: 0;
    font-size: 13px;
    ement.style {
      font-family: 'Oswald', sans-serif;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 15px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

const SideNavbar = ({ isOpen, onClose }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
      <SidebarHeader>
        <img src={img1} alt="Logo" />
        <h2>Sample text</h2>
        <p>sample.email@example.com</p>
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem onClick={onClose}>
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem onClick={onClose}>
          <Link to="/dashboard">
            <FaChartLine />
            Dashboard
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem onClick={onClose}>
          <Link to="/logout">
            <FaSignOutAlt />
            Logout
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default SideNavbar;

//=======================================================>>>>>>>>almost done
// import React from "react";
// import styled from "styled-components";
// import { FaHome, FaChartLine, FaSignOutAlt, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const SidebarContainer = styled.div`
//   width: ${({ isOpen }) => (isOpen ? "200px" : "0")};
//   height: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: #59d9cc;
//   overflow-x: hidden;
//   transition: 0.5s;
//   padding-top: 60px;
// `;

// const CloseButton = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   cursor: pointer;
//   color: white;
// `;

// const SidebarMenu = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const SidebarMenuItem = styled.li`
//   padding: 15px;
//   color: white;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #555;
//   }

//   a {
//     color: white;
//     text-decoration: none;
//     display: flex;
//     align-items: center;

//     svg {
//       margin-right: 10px;
//     }
//   }
// `;

// const SideNavbar = ({ isOpen, onClose }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <CloseButton onClick={onClose}>
//         <FaTimes />
//       </CloseButton>
//       <SidebarMenu>
//         <SidebarMenuItem onClick={onClose}>
//           <Link to="/">
//             <FaHome />
//             Home
//           </Link>
//         </SidebarMenuItem>
//         <SidebarMenuItem onClick={onClose}>
//           <Link to="/dashboard">
//             <FaChartLine />
//             Dashboard
//           </Link>
//         </SidebarMenuItem>
//         <SidebarMenuItem onClick={onClose}>
//           <Link to="/logout">
//             <FaSignOutAlt />
//             Logout
//           </Link>
//         </SidebarMenuItem>
//       </SidebarMenu>
//     </SidebarContainer>
//   );
// };

// export default SideNavbar;

//=============================================================>>>>Sidenavbar
// import React from "react";
// import styled from "styled-components";
// import { FaHome, FaChartLine, FaSignOutAlt, FaTimes } from "react-icons/fa";

// const SidebarContainer = styled.div`
//   width: ${({ isOpen }) => (isOpen ? "250px" : "0")};
//   height: 100%;
//   position: relative;
//   top: 100px;
//   left: -24px;
//   background-color: #23817b;
//   overflow-x: hidden;
//   transition: 0.3s;
//   padding-top: 30px;
// `;

// const SidebarMenu = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const SidebarMenuItem = styled.li`
//   padding: 15px;
//   display: flex;
//   align-items: center;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     background-color: #555;
//   }
// `;

// const SidebarMenuIcon = styled.div`
//   margin-right: 10px;
// `;
// const CloseButton = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   cursor: pointer;
//   color: white;
// `;
// const SideNavbar = ({ isOpen, onClose }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <CloseButton onClick={onClose}>
//         <FaTimes />
//       </CloseButton>
//       <SidebarMenu>
//         <SidebarMenuItem>
//           <SidebarMenuIcon>
//             <FaHome />
//           </SidebarMenuIcon>{" "}
//           Home
//         </SidebarMenuItem>
//         <SidebarMenuItem>
//           <SidebarMenuIcon>
//             <FaChartLine />
//           </SidebarMenuIcon>{" "}
//           Dashboard
//         </SidebarMenuItem>
//         <SidebarMenuItem>
//           <SidebarMenuIcon>
//             <FaSignOutAlt />
//           </SidebarMenuIcon>{" "}
//           Logout
//         </SidebarMenuItem>
//       </SidebarMenu>
//     </SidebarContainer>
//   );
// };

// export default SideNavbar;

//=================================================================>>>>>
