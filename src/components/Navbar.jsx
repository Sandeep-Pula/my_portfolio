import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header' style={{
      position: "fixed", // Keeps the navbar fixed at the top
      top: 0, // Aligns it to the top of the viewport
      left: 0, // Aligns it to the left of the viewport
      width: "100%", // Makes it span the full width
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Slight transparency
      backdropFilter: "blur(10px)", // Adds the blur effect to the background content
      zIndex: 1000, // Ensures it stays above other elements
      padding: "10px 20px", // Adds spacing for the navbar
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Optional: subtle border for better visibility
    }}>
      <NavLink to='/'>
      <img src={logo} alt="logo" className="w-12 h-12 object-contain" />

      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>



      <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}> Contact </NavLink>

      </nav>
    </header>
  );
};

export default Navbar;
