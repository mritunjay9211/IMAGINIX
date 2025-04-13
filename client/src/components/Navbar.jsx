import React from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from "react-router-dom"
import Button from "../components/Button/Button"
import { AddRounded, ExploreRounded } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background: ${({theme}) => theme.navbar};
  color: ${({theme}) => theme.menu_primary_text};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 25px;
  cursor: pointer;
  font-weight: bold;
`;

const End = styled.div`
  justify-content: flex-end;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0 40px;
  
  @media only screen and (max-width: 768px) {
    gap: 15px;
    margin: 0 20px;
  }
`;

const NavLink = styled.a`
  color: ${({theme}) => theme.menu_primary_text};
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  opacity: ${props => props.active ? 1 : 0.8};
  
  &:hover {
    opacity: 1;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  
  return (
    <Container>
      <Heading onClick={() => navigate('./') }>IMAGINIX</Heading>
      
      <Navigation>
        <NavLink 
          active={path[1] === "" || path[1] === undefined} 
          onClick={() => navigate('/')}
        >
          Home
        </NavLink>
        <NavLink 
          active={path[1] === "pricing"} 
          onClick={() => navigate('/pricing')}
        >
          Pricing
        </NavLink>
        <NavLink 
          active={path[1] === "aboutus"} 
          onClick={() => navigate('/aboutus')}
        >
          About Us
        </NavLink>
      </Navigation>
      
      {path[1] === "post" ? (
        <End>
          <Button
            onClick={() => navigate("./") }
            text="Explore posts"
            leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
            type="secondary"
          />
        </End>
      ) : (
        <End>
          <Button 
            onClick={() => navigate("./post") }
            text="Create new post"
            leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          />
        </End>
      )}
    </Container>
  );
};

export default Navbar;