import React, { useEffect } from 'react';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import { HasAccess } from '@permify/react-role';
import * as Icon from 'react-feather';

const NavSubMenu = ({ title, items, isUrl, suffixColor, suffix }) => {
  const location = useLocation();

  const [collapsed, setCollapsed] = React.useState(false);
  const getActive = document.getElementsByClassName('activeLink');
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (isUrl) {
      setCollapsed(!collapsed);
     
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavItem className={collapsed && getActive ? 'activeParent' : ''}>
      <NavLink className="cursor-pointer gap-3" onClick={toggle}>
        <span className="sidebarIcon" style={{ visibility: 'visible' }}>
          {/* Replace item.icon with a common icon */}
          {title === 'Main' && <Icon.Airplay />}
          {title === 'Admin' && <Icon.Monitor />}
        </span>
        <span className="hide-mini w-100">
          <div className="d-flex align-items-center">
            <span className="d-block">{title}</span>
            <span className="ms-auto">
              <span className={`badge me-2 ${suffixColor}`}>{suffix}</span>
              <i className={`bi fs-8 ${collapsed ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
            </span>
          </div>
        </span>
      </NavLink>

      <Collapse isOpen={collapsed} navbar tag="ul" className="subMenu">
        {items.map((item) => (
        //    <HasAccess
        //    roles={null}
        //    permissions={`${item.section_title}-list`}
        //    renderAuthFailed={<p></p>}
        //  >
           <NavItem
            key={item.section_title}
            className={`hide-mini  ${location.pathname === item.internal_link ? 'activeLink' : ''}`}
          >
            <NavLink tag={Link} to={item.internal_link} className="gap-3" style={{ paddingLeft: '25px' }}>
              <span className="sidebarIcon" style={{ visibility: 'visible' }}>
                {item.section_title === 'Enquiry' && <Icon.Grid />}
                {item.section_title === 'Settings' && <Icon.Settings />}
                {item.section_title === 'Customer' && <Icon.Users />}
                {item.section_title === 'Q&A' && <Icon.Bookmark />}
                {item.section_title === 'Magazine' && <Icon.BookOpen />}
                {item.section_title === 'Category' && <Icon.Server />}
                {item.section_title === 'Product' && <Icon.Book />}
                {item.section_title === 'Content' && <Icon.Layers />}
                {item.section_title === 'Orders' && <Icon.ShoppingBag />}
                {item.section_title === 'Sub Category' && <Icon.Server />}
                {item.section_title === 'Staff' && <Icon.User />}
                {item.section_title === 'Blog' && <Icon.MessageCircle />}
                {item.section_title === 'UserGroup' && <Icon.UserCheck />}
                {item.section_title === 'Value list' && <Icon.List />}
                {item.section_title === 'Menu' && <Icon.Menu />}
                {item.section_title === 'Coupon' && <Icon.Tag />}
              </span>
              <span className="hide-mini">
                <span>{item.section_title}</span>
              </span>
            </NavLink>
          </NavItem>
        //  </HasAccess>
         
        ))}
      </Collapse>
    </NavItem>
  );
};
NavSubMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  isUrl: PropTypes.bool,
  suffix: PropTypes.any,
  suffixColor: PropTypes.string,
};
export default NavSubMenu;
