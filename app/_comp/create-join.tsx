"use client";
import React from "react";
import Link from "next/link";

function Createjoin() {
  return (
    <>
      <Link href="/create-room">
        <div className="h-28 text-white font-bold w-28 bg-green-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse hover:animate-none ">
          Create room
        </div>
      </Link>
      <Link href="/join-room">
        <div className="h-28 text-white font-bold w-28 bg-green-600 rounded-full flex items-center justify-center animate-pulse cursor-pointer animate-pulse hover:animate-none ">
          Join room
        </div>
      </Link>
    </>
  );
}

export default Createjoin;
