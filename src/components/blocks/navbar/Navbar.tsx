import { FC, Fragment, ReactElement, useRef } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
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

// Sections of the one-page site (ids in pages/index.tsx). Class names are unchanged from the template.
const NAV_ITEMS = [
  { to: 'home', label: 'Home', className: 'nav-link hover  pb-0 mb-5' },
  { to: 'experience', label: 'Experience', className: 'nav-link hover pb-0 mb-5' },
  { to: 'tech-talk', label: 'Tech-Talks', className: 'nav-link hover pb-0 mb-5' },
  { to: 'projects', label: 'Projects', className: 'nav-link hover pb-0 mb-5 cursor-pointer' }
];

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  // On the home page the links smooth-scroll to each section; on any other page (e.g. 404) they go to /#section.
  const { pathname } = useRouter();
  const onHomePage = pathname === '/';

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

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
            {NAV_ITEMS.map(({ to, label, className }) => (
              <li className="nav-item " key={to}>
                {onHomePage ? (
                  <Link to={to} spy={true} smooth={true} offset={-50} duration={500} className={className}>
                    {label}
                  </Link>
                ) : (
                  <a href={`/#${to}`} className={className}>
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="hello@baraqabaja.com" className="link-inverse" href="mailto:hello@baraqabaja.com" />
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
