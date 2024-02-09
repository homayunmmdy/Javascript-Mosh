import Link from "next/link";
import React from "react";
import { FaGithub , FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="flex bg-white dark:bg-black flex-col space-y-10 justify-center m-10">

        <div className="flex justify-center space-x-5">
          <Link
            href="https://github.com/homayunmmdy"
            target="_blank"
            rel="noopener noreferrer"
          >
<FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/homayoun-mohammadi-a3590a283/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <p className="text-center text-gray-700 font-medium">
          Powered by Homayoun
        </p>
      </footer>
    </div>
  );
};

export default Footer;
