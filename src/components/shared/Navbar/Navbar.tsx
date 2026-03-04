import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./navlinks";
import HamburgerMenu from "./HamburgerMenu";
import Container from "./../../reusable/Container/Container";
import { ICONS } from "../../../assets";
import Button from "../../reusable/Button/Button";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="z-[9999] absolute top-0 w-full">
      {/* Navbar Content */}
      <div className="relative py-4 lg:py-5">
        <Container>
          <nav className="flex items-center justify-between font-Nunito min-h-12.5">
            {/* Logo */}
            <Link to="/">
              <img src={ICONS.logo} alt="Logo" className="w-56" />
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg transition-all duration-300  ${
                    location.pathname === link.path
                      ? "font-medium text-primary-10"
                      : "hover:text-primary-10 text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex">
              <Button label="Book Free Sessions" variant="primary" />
            </div>

            {/* Hamburger */}
            <div className="flex lg:hidden">
              <HamburgerMenu />
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
