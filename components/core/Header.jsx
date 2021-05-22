import Image from "next/image";
import propTypes from "prop-types";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Header = ({ links }) => {
  return (
    <header className="header bg-blue-200">
      <nav className="relative flex-wrap flex flex-start px-3 py-1">
        <div className="flex flex-start flex-grow-0 items-center logo w-2/7">
          <Link href="/">
            <Image
              // layout="responsive"
              src="/vercel.svg"
              alt=""
              className=""
              height={16}
              width={72}
            />
          </Link>
        </div>
        <div className="center-nav flex-grow w-3/7 hidden md:inline-block">
          <NavMenu links={links} />
        </div>
        <div className="right-nav w-2/7 flex flex-grow-0 flex-row-reverse items-center">
          <div className="auth hidden md:inline-block">
            <Link href="/auth">Login</Link>
            <button type="button">Book Now</button>
          </div>
          <div className="hamburger md:hidden">
            <button type="button" className="">
              <span aria-label="hamburger" role="img">
                🍔
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
Header.propTypes = {
  links: propTypes.array,
};
Header.defaultProps = {
  links: [],
};

export default Header;
