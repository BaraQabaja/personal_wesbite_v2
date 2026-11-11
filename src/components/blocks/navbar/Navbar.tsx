import { FC, Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- partial header component -------- //
import Social from './partials/Social';

// ===================================================================
type NavbarProps = {
  social?: boolean; // show the social icons on the right (home page)
  stickyBox?: boolean;
  navClassName?: string;
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
  const { navClassName, social, navOtherClass, stickyBox } = props;

  // On the home page the links smooth-scroll to each section; on any other page (e.g. 404) they go to /#section.
  const { pathname } = useRouter();
  const onHomePage = pathname === '/';

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // navbar classname once the page is scrolled (sticky)
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // all main header contents
  const headerContent = (
    <Fragment>
      {/* empty brand slot keeps the template's layout (the logo was removed) */}
      <div className="navbar-brand w-50 " />

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
        <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
      </nav>
    </Fragment>
  );
};

// set default Props
Navbar.defaultProps = {
  social: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
