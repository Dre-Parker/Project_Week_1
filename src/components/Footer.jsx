import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
            Anime Haven, created by Sreehari S., is a one-of-a-kind anime store that caters to each customer's personal taste and desire for freedom.
            The store is designed to offer a vast selection of anime merchandise, from rare collectibles to customized items,allowing anime fans to express themselves freely. With an intuitive shopping experience, Anime Haven adapts to the preferences of every visitor, ensuring that they find exactly what resonates with their unique style and interests. Sreehari’s vision was to create a space where anime lovers can embrace their individuality and explore their passion without limits.
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
              Anime Hoodies & Clothing
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
              Anime Badges
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
              Katana
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
              Comics & Manga
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
              Posters
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Product Policy
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Be A Seller
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} Anime Heaven, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
