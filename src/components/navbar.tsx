import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const NavLinks: { name: string; link: string }[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-300 py-4 sm:px-20 px-5">
      <Link to="/">
        <a className="p-2">
          <StaticImage src="../assets/Astrobotics_Banner_Small.png" alt="Astrobotics" height={60}/>
        </a>
      </Link>
      <div className="flex">
        {NavLinks.map((links) => (
          <Link to={links.link} key={links.link}>
            <a className="px-3 py-2 rounded text-gray-800 text-lg font-bold items-center transition-colors justify-center hover:bg-gray-600 hover:text-white">
              {links.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
