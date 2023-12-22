import React from "react";
import styled from "styled-components";
import { FaBars, FaSearch, FaEllipsisV } from "react-icons/fa";

const HeaderContainer = styled.div`
  background-color: #59d9cc;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header = ({ onBurgerClick }) => {
  return (
    <HeaderContainer>
      <FaBars onClick={onBurgerClick} style={{ cursor: "pointer" }} />
      <Title>Your App Title</Title>
      <div>
        <FaSearch style={{ marginRight: "10px", cursor: "pointer" }} />
        <FaEllipsisV style={{ cursor: "pointer" }} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
