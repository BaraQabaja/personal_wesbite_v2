// import Link  from 'next/link';
import LinkType from 'types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
import { Link } from 'react-scroll';

// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- partial header component -------- //
import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';

import Language from './partials/Language';
import MiniCart from './partials/MiniCart';
// -------- data -------- //
// import {
//   demos,
//   pages,
//   blogsNavigation,
//   blocksNavigation,
//   projectsNavigation,
//   documentionNavigation
// } from 'data/navigation';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  // const renderLinks = (links: LinkType[]) => {
  //   return links.map((item) => (
  //     <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
  //   ));
  // };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-50 ">
        {/* <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`} />} /> */}
      </div>

      
      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0"></h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
          <li className="nav-item ">
              <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="nav-link hover  pb-0 mb-5">
                Home
              </Link>
            </li>

            {/* <li className="nav-item ">
              <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="nav-link hover  pb-0 mb-5">
                About
              </Link>
            </li> */}
 <li className="nav-item ">
              <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}  className="nav-link hover pb-0 mb-5">Experience</Link>
            </li>
            <li className="nav-item ">
              <Link to="tech-talk" spy={true} smooth={true} offset={-50} duration={500}  className="nav-link hover pb-0 mb-5">Tech-Talks</Link>
            </li>
            <li className="nav-item ">
              <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="nav-link hover pb-0 mb-5 cursor-pointer">Projects</Link>
            </li>

           
            
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
            <NextLink title="ceo@sharkod.com" className="link-inverse" href="mailto:ceo@sharkod.com" />
            <br />

              <NextLink title="bara.qabaja@gmail.com" className="link-inverse" href="mailto:bara.qabaja@gmail.com" />
              <br />
              <NextLink href="tel:(+972) 059-938-7258" title="(+972) 059-938-7258" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= language dropdwown ============= */}
          {language && <Language />}

          {/* ============= info button ============= */}
          {/* {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )} */}

          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )}

          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= shopping cart button ============= */}
          {cart && (
            <li className="nav-item">
              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-cart"
                className="nav-link position-relative d-flex flex-row align-items-center"
              >
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>
          )}

          {/* ============= social icons link ============= */}
          {social && <Social />}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      {/* <Signin /> */}

      {/* ============= signup modal ============= */}
      {/* <Signup /> */}

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= show search box ============= */}
      {search && <Search />}

      {/* ============= cart sidebar ============= */}
      {cart && <MiniCart />}
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
