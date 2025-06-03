import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
} from 'reactstrap';
import { ReactComponent as LogoWhite } from '../../assets/images/logos/logo.svg';
import user1 from '../../assets/images/users/user1.jpg';

import { ToggleMiniSidebar, ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';

const Header = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  //const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();
  const logout=()=>{
    localStorage.clear()
    setTimeout(()=>{
      window.location.reload()
    },200)
  }

  return (
    <Navbar
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="topbar"
      style={{ backgroundColor: '#5a3372'}}
    >
      {/******************************/}
      {/**********Toggle Buttons**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <Button
          style={{ backgroundColor: '#5a3372'}}
          className="d-none d-lg-block"
          onClick={() => dispatch(ToggleMiniSidebar())}
        >
          <i className="bi bi-list" />
        </Button>
        <NavbarBrand href="/" className="d-sm-block d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          style={{ backgroundColor: '#5a3372'}}
          className="d-sm-block d-lg-none"
          onClick={() => dispatch(ToggleMobileSidebar())}
        >
          <i className="bi bi-list" />
        </Button>
      </div>

      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="me-auto d-none d-lg-flex" navbar>
        {/* <NavItem>
          <Link to="/starter" className="nav-link">
            Starter
          </Link>
        </NavItem> */}
       
        
        <NavItem>
          <Link to="/about" className="nav-link">
            EMS Admin
          </Link>
        </NavItem>
      </Nav>
      <div className="d-flex">
        <UncontrolledDropdown>
          <DropdownToggle style={{ backgroundColor: '#5a3372'}}>
            <img src={user1} alt="profile" className="rounded-circle" width="30" />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <div className="p-2 px-3">
            <Button onClick={logout} color="danger" size="sm">
                Logout
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Navbar>
  );
};

export default Header;
