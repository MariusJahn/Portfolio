import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-4 w-full pt-8">
      <Link href={"#"}>Imprint</Link>
      <div className="bg-secondary-50">Vercel ❤ NextUI</div>
      <Link href={"#"}>Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
