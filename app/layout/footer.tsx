import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-end gap-4 w-full mt-8 pt-8 border-t-1">
      <div className="pb-4">links</div>
      <div className="pb-4">Deployed with ❤ on Vercel </div>

      <div className="flex flex-col gap-2 pb-4">
        <h3 className="font-bold pb-4">Legal</h3>
        <Link href={"/legal/privacypolicy"}>Privacy Policy</Link>
        <Link href={"/legal/cookiepreferences"}>Cookie Preferences</Link>
        <Link href={"/legal/imprint"}>Imprint</Link>
      </div>
    </footer>
  );
};

export default Footer;
