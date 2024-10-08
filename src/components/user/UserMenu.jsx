import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { defaultTheme } from "../../styles/themes/default";
import Title from "../Common/Title";
import { useMyAuth } from "../../store/Auth";

const NavMenuWrapper = styled.nav`
  margin-top: 32px;

  .nav-menu-list {
    row-gap: 8px;
  }

  .nav-menu-item {
    border-radius: 4px;
  }

  .nav-menu-link {
    padding-left: 36px;
    width: 100%;
    height: 40px;
    column-gap: 12px;
    border: 1px solid transparent;

    &:hover {
      background-color: ${defaultTheme.color_whitesmoke};
    }

    .nav-link-text {
      color: ${defaultTheme.color_gray};
    }

    &.active {
      border-left: 2px solid ${defaultTheme.color_gray};
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }
`;

const UserMenu = ({ username }) => {

  const location = useLocation();
  return (
    <div>
      <Title titleText={username} />
      <p className="text-base font-light italic">Welcome to your account.</p>

      <NavMenuWrapper>
        <ul className="nav-menu-list grid">
          <li className="nav-menu-item">
            <Link
              to="/orderdetail"
              className={`nav-menu-link flex items-center ${
                location.pathname === "/order" ||
                location.pathname === "/order_detail"
                  ? "active"
                  : ""
              }`}
            >
              <span className="nav-link-icon flex items-center justify-center">
                <img src="./assets/icons/ac_orders.svg" alt="" />
              </span>
              <span className="text-base font-semibold nav-link-text no-wrap">
                My orders
              </span>
            </Link>
          </li>
          <li className="nav-menu-item"></li>
          <li className="nav-menu-item">
            <Link
              to="/account"
              className={`nav-menu-link flex items-center ${
                location.pathname === "/account" ||
                location.pathname === "/account/add"
                  ? "active"
                  : ""
              }`}
            >
              <span className="nav-link-icon flex items-center justify-center">
                <img src="./assets/icons/ac_user.svg" alt="" />
              </span>
              <span className="text-base font-semibold nav-link-text no-wrap">
                My Account
              </span>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/signout" className={`nav-menu-link flex items-center`}>
              <span className="nav-link-icon flex items-center justify-center">
                <img src="./assets/icons/ac_sign_out.svg" alt="" />
              </span>
              <span className="text-base font-semibold nav-link-text no-wrap">
                Sign out
              </span>
            </Link>
          </li>
        </ul>
      </NavMenuWrapper>
    </div>
  );
};

export default UserMenu;
