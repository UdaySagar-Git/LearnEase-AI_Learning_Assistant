import { UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-14 bg-slate-100 shadow-md flex justify-between align-middle p-2 px-5 fixed w-full">
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-slate-400">
          LearnEase
        </h1>
      </Link>
      <div className="flex gap-5">
        <Link
          href="/generateQuiz"
          className="text-xl ml-5 mt-1 hover:text-slate-400"
        >
          Generate Quiz
        </Link>

        <Link
          href="/about-us"
          className="text-xl ml-5 mt-1 hover:text-slate-400"
        >
          About Us
        </Link>

        <Link
          href="/faq"
          className="text-xl ml-5 mt-1 mr-10 hover:text-slate-400"
        >
          FAQ
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
