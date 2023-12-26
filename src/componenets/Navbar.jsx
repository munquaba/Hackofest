import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="">
      <NavLink
        to="/"
        className="font-bold  pt-16 pl-7"
      >
        Hack-o-fest
      </NavLink>
      <nav className="flex justify-end text-lg gap-7 font-medium ">
        <NavLink
          to="/aboutus"
          className={({isActive}) => (isActive ? 'text-blue-500' : 'text-black')}
        >
          About Us
        </NavLink>
        <NavLink
          to="/sponsors"
          className={({isActive}) => (isActive ? 'text-blue-500' : 'text-black')}
        >
          Sponsors
        </NavLink>
        <NavLink
          to="/contactus"
          className={({isActive}) => (isActive ? 'text-blue-500' : 'text-black')}
        >
          Contact US
        </NavLink>
        <NavLink
          to="/timeline"
          className={({isActive}) => (isActive ? 'text-blue-500' : 'text-black')}
        >
          TimeLine
        </NavLink>
        <NavLink
          to="/rules"
          className={({isActive}) => (isActive ? 'text-blue-500' : 'text-black')}
        >
          Rules
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
