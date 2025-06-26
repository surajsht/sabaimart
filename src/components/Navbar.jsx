import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.value);

  return (
    <nav className="py-6">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="font-poppins text-3xl font-bold text-blue-700">SabaiMart</h1>
        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <NavLink to="/wishlist" className="relative group">
            <FaHeart className="text-xl text-gray-600 group-hover:text-red-500 transition" />
          </NavLink>

          <NavLink to="/cart" className="relative group">
            <FaShoppingCart className="text-xl text-gray-600 group-hover:text-blue-600 transition" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
