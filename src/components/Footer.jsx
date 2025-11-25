import React from "react";
import { Copyright, Instagram, Facebook, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full flex p-4 place-content-around text-white bg-black shadow-lg">
      <div className="flex items-center gap-2">
        <Copyright className="w-4 h-4" />
        <p className="text-sm">All Right Reserved Tracker pvt.ltd</p>
      </div>
      <div className="flex gap-3">
        <Instagram className="hover:text-sky-700 cursor-pointer" />
        <Facebook className="hover:text-sky-700 cursor-pointer" />
        <Twitter className="hover:text-sky-700 cursor-pointer" />
      </div>
    </footer>
  );
}

export default Footer;
