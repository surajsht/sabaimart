import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const wishListItems = useSelector((state) => state.wishlist.value);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="py-6">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="font-poppins text-3xl font-bold text-blue-700">
            SabaiMart
          </h1>
        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-semibold text-blue-600" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "font-semibold text-blue-600" : "hover:text-blue-600"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "font-semibold text-blue-600" : "hover:text-blue-600"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <NavLink to="/wishlist" className="group relative">
            <FaHeart className="text-xl text-gray-600 transition group-hover:text-red-500" />
          </NavLink>

          <NavLink to="/cart" className="group relative">
            <FaShoppingCart className="text-xl text-gray-600 transition group-hover:text-blue-600" />
            {cartItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
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
