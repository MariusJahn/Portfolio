import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXingSquare } from "react-icons/fa";

const SocialsContainer = () => {
  return (
    <div className="flex flex-col z-20 fixed bottom-0 left-0 gap-4 text-3xl p-8">
      <Link
        className="hover:text-[#0a66c2]"
        href="https://www.linkedin.com/in/marius-jahn-743992225/"
      >
        <BsLinkedin />
      </Link>
      <Link
        href="https://www.xing.com/profile/Marius_Jahn5/cv"
        className="hover:text-[#007B80]"
      >
        <FaXingSquare />
      </Link>
      <Link href="https://github.com/MariusJahn">
        <BsGithub />
      </Link>
      <div></div>
      <div></div>
    </div>
  );
};

export default SocialsContainer;
