import React, { useEffect } from 'react';
import { Button, Nav } from 'reactstrap';
import 'react-simple-tree-menu/dist/main.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import Logo from '../../logo/Logo';
import { ToggleMobileSidebar } from '../../../store/customizer/CustomizerSlice';
import NavItemContainer from './NavItemContainer';
import NavSubMenu from './NavSubMenu';
import api from '../../../constants/api';

const Sidebar = () => {
  const [menu, setMenu] = React.useState();
  const location = useLocation();
  const currentURL = location.pathname.split('/').slice(0, -1).join('/');

  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/section/getSectionForSidemenu').then((res) => {
      const arrayOfObj = Object.entries(res.data.data).map((e) => ({ id: e[0], data: e[1] }));
      console.log(arrayOfObj)
      setMenu(arrayOfObj);
    });
  }, []);

  return (
    <div className={`sidebarBox shadow bg-${activeBg} ${isFixed ? 'fixedSidebar' : ''}`} style={{ backgroundColor: '#ebdcf6' }}>
      <SimpleBar style={{ height: '100%', backgroundColor: '#ebdcf6'}}>
        {/********Logo*******/}
        <div className="d-flex p-3 align-items-center">
          <Logo />
          <Button
            close
            size="sm"
            className="ms-auto d-sm-block d-lg-none"
            onClick={() => dispatch(ToggleMobileSidebar())}
          />
        </div>
        {/********Sidebar Content*******/}
        <div className="p-3 pt-1 mt-2">
          <Nav vertical className={activeBg === 'white' ? '' : 'lightText'}>
            {menu &&
              menu.map((navi) => {
                if (navi.data) {
                  return (
                   
                      <NavSubMenu
                        key={navi.id}
                        //icon={navi.icon}
                        title={navi.id}
                        items={navi.data}
                        suffix={navi.data.length}
                        suffixColor="bg-info"
                        // toggle={() => toggle(navi.id)}
                        // collapsed={collapsed === navi.id}
                        isUrl={currentURL === navi.data[0].internal_link}
                      />
                 
                  );
                }
                return (
                  <NavItemContainer
                    key={navi.id}
                    //toggle={() => toggle(navi.id)}
                    //className={location.pathname === navi.data[0].internal_link ? 'activeLink' : ''}
                    to={navi.data[0].internal_link}
                    title={navi.id}
                    suffix={navi.data.length}
                    suffixColor="bg-info"
                    //icon={navi.icon}
                  />
                );
              })}
          </Nav>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
