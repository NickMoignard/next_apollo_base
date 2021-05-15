import Link from "next/link";
import propTypes from "prop-types";
import React from "react";

const NavMenu = ({ links }) => {
  return (
    <ul className="justify-center flex">
      {links.map((linkObj) => {
        return (
          <li key={linkObj.id} className="inline">
            <Link href={linkObj.url}>
              <a>{linkObj.text}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const NavLink = React.forwardRef(({ onClick, href, linkObj }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {linkObj.text}
    </a>
  );
});

NavMenu.defaultProps = {
  links: [],
};
NavMenu.propTypes = {
  links: propTypes.array,
};

export default NavMenu;
