import React from "react";
import logo from "../images/logo.png";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="text-gray-600 body-font relative bottom-0">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className=" relative right-3 " src={logo} />
            <span className=" text-xl">EZBank</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 EZBank
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <SocialIcon
              className="mr-5"
              url="https://www.linkedin.com/in/mehulpuri/"
            />
            <SocialIcon url="https://github.com/mehulpuri" />
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
