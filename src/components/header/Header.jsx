import styled from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../styles/header";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/myImageData";
import { navMenuData } from "../../data/data";
import { Link, useLocation } from "react-router-dom";
import { Input, InputGroupWrapper } from "../../styles/form";
import { defaultTheme } from "../../styles/themes/default";
import DropMenu from "../dropDownMenu/DropMenu";
import { useState } from "react";
//import { useDispatch } from "react-redux";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  const [openDropMenu, setDropMenu] = useState(false);

  return (
    <HeaderMainWrapper className="header flex items-center">
      <Container className="container">
        <div className="header-wrap flex items-center justify-between">
          <div className="flex items-center">
            <button type="button" className="sidebar-toggler">
              <img src={staticImages.menuIcon} />
            </button>

            <SiteBrandWrapper to="/" className="inline-flex">
              <div className="brand-image-wrap">
                <img
                  className="site-brand-img"
                  src={staticImages.logo}
                  alt="site logo"
                />
              </div>
              <div className="brand-name-pic">
                <img src={staticImages.logo2} />
              </div>
            </SiteBrandWrapper>
          </div>

          <NavigationAndSearchWrapper className="flex items-center">
            <NavigationMenuWrapper>
              <ul className="nav-menu-list flex items-center">
                {navMenuData?.map((menu) => {
                  return (
                    <li className="nav-menu-item" key={menu.id}>
                      <Link
                        className="nav-menu-link text-base font-medium text-gray"
                        to={menu.menuLink}
                      >
                        {menu.menuText}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuWrapper>

            <form className="search-form">
              <InputGroupWrapper className="input-group">
                <span className="input-icon">
                  <img src={staticImages.search} />
                </span>

                <Input
                  className="input-control w-full"
                  type="text"
                  placeholder="search your products"
                />
              </InputGroupWrapper>
            </form>
          </NavigationAndSearchWrapper>

          <IconLinksWrapper className="flex items-center">
            {/* <Link
              to="/account"
              className={`icon-link ${
                location.pathname === "/account" ||
                location.pathname === "account/add"
                  ? "active"
                  : ""
              }`}
            ></Link> */}

            <Link
              to="/cart"
              className={`icon-link ${
                location.pathname === "/cart" ? "active" : ""
              } inline-flex items-center justify-center`}
            >
              <img src={staticImages.cart} alt="" />
            </Link>

            <div className="flex items-center">
              <button onClick={() => setDropMenu((prev) => !prev)}>
                <img src={staticImages.user} alt="" />
              </button>
            </div>
          </IconLinksWrapper>
        </div>
      </Container>

      {openDropMenu && <DropMenu />}
    </HeaderMainWrapper>
  );
};

export default Header;

const NavigationAndSearchWrapper = styled.div`
  column-gap: 20px;

  .input-group {
    min-width: 250px;
  }

  .input-control {
  }

  .input-icon {
    width: 40px;
    height: 40px;
  }
`;

const NavigationMenuWrapper = styled.nav`
  .nav-menu-list {
    margin-left: 20px;
  }

  .nav-menu-item {
    margin: 5px;
    border-radius: 5px;

    &:hover {
      transition-duration: 0.5s;
      transform: scale(1.2);
      font-weight: 700;
    }
  }

  /* .nav-menu-link {
    &.active {
      color: ${defaultTheme.color_outerspace};
      font-weight: 700;
    } 
    } */
`;

const IconLinksWrapper = styled.div`
  column-gap: 5px;

  .icon-link {
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;
    border-radius: 6px;

    &.active {
      background-color: ${defaultTheme.color_sea_green};
      img {
        filter: brightness(100);
      }
    }

    &:hover {
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }
`;
