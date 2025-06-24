import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container mt-12">
      <div className="grid grid-cols-1 gap-8 border-b-[1px] border-t-[1px] border-gray-400 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div>
          <h2 className="mb-6 font-poppins text-3xl font-semibold">
            SabaiMart
          </h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div>
          <h2 className="mb-6 font-poppins text-3xl font-semibold">
            About SabaiMart
          </h2>

          <ul className="flex flex-col items-start gap-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Core Values</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-poppins text-3xl font-semibold">
            About Company
          </h2>

          <ul className="flex flex-col items-start gap-2">
            <li>
              <a href="#">Shopping App</a>
            </li>
            <li>
              <a href="#">Be An Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Product</a>
            </li>
            <li>
              <a href="#">Media Enquires</a>
            </li>
            <li>
              <a href="#">Other Services</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-poppins text-3xl font-semibold">
            Store Details
          </h2>

          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300">
              <FaHeadphonesAlt size={36} />
            </div>

            <div className="flex flex-col items-start gap-2">
              <span>Need Any Help?</span>
              <span>(+800) 123 456 789</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span>Address: Do Cha Marga</span>
            <span>Kathmadu, Nepal</span>
            <span>Email: sabaimart@domain.com</span>
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-poppins text-3xl font-semibold">
            Follow Us
          </h2>

          <div>
            <div className="flex items-center gap-4">
              <a href="#">
                <FaFacebookF size={20} />
              </a>
              <a href="#">
                <FaInstagram size={20} />
              </a>
              <a href="#">
                <FaXTwitter size={20} />
              </a>
              <a href="#">
                <FaTiktok size={20} />
              </a>
              <a href="#">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <img
            src="/payments/payment-1.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
          <img
            src="/payments/payment-2.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
          <img
            src="/payments/payment-3.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
          <img
            src="/payments/payment-4.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
          <img
            src="/payments/payment-5.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
          <img
            src="/payments/payment-6.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
          <img
            src="/payments/payment-7.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
          <img
            src="/payments/payment-8.webp"
            alt="payment-method"
            className="max-w-20 flex-1 border-[1px] rounded-md border-gray-400 object-contain p-2"
          />
        </div>

        <span className="mt-6 block text-center">
          Copyright © SabaiMart all rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
