import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="font-poppins text-4xl font-bold"> SabaiMart </h1>

          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-red-600" : "text-black"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
