import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-end gap-4 w-full pt-8">
      <div>Deployed with ❤ on Vercel </div>

      <div className="flex flex-col gap-2 pb-4">
        <h3 className="font-bold pb-4">Legal</h3>
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Cookie Preferences</Link>
        <Link href={"#"}>Imprint</Link>
      </div>
    </footer>
  );
};

export default Footer;
