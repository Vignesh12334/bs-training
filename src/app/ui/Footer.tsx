import Link from "next/link"
import Image from "next/image"
import TextL from "./Typography/TextL" 

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="flex items-center">
  
            <Link href="/dashboard" >
          <Image src='/logo2.svg' alt="logo-img" width={154} height={32} />
          </Link>
          </div>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0 py-3">
            <a href="#" className="text-black hover:text-gray-600">
              Products
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              About Us
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              Careers
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              Blogs
            </a>
          </div>
          <div className="flex items-center gap-5 md:gap-5 py-6">
            {/* <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaFacebook />
            </a>
            <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaPinterest />
            </a> */}
            <Image src='/icon 2.png' alt="facebook" width={32} height={32} />
             <Image src='/icon 1.png' alt="Instagram" width={32} height={32} />
             <Image src='/icon 3.png' alt="tweeter" width={32} height={32} />
              <Image src='/icon5.png' alt="linkeDin" width={32} height={32} />
             <Image src='/icon 4.png' alt="Pintrest" width={32} height={32} />
          </div>
        </div>
        <div className="flex justify-center mt-4 text-gray-600 mx-10 px-4 md:hidden">
          <p className="text-sm">
            <span className="">
              © 2024 Beyond Sustainability. All rights reserved.
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline pr-2">
                Privacy Policy
              </a>
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline ">
                Terms of Service
              </a>
            </span>
          </p>
        </div>
        <div className="hidden md:flex justify-center mt-4 text-gray-600 ">
          <p className="text-sm">
            <span className="">
              © 2020 Beyond Sustainability. All rights reserved.
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline">
                Privacy Policy
              </a>
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline">
                Terms of Service
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;