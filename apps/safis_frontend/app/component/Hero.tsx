"use client";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  return (
    <section className="pt-10 sm:pt-15">
      <div className="items-center text-center px-4">
        <div
          className="
            mb-6 sm:mb-8
            mx-auto
            h-16 w-16
            sm:h-20 sm:w-20
            border border-gray-300
            rounded-3xl sm:rounded-4xl
            bg-gradient-to-b
            from-orange-800
            to-cyan-500
            text-white
            shadow-lg
            hover:shadow-xl
            transition
          "
        ></div>

        <h1 className="font-bold text-2xl sm:text-4xl">
          No Events Yet
        </h1>

        <p className="text-sm sm:text-md mb-8 sm:mb-10 font-medium text-gray-600">
          Start Creating amazing events and manage your tickets <br className="hidden sm:block" />
          all in one place
        </p>

        <button
          className="
            bg-orange-800
            px-6 sm:px-10
            py-2.5 sm:py-3
            rounded-md
            text-white
            font-bold
            text-sm sm:text-base
            cursor-pointer
            hover:bg-orange-900
            transition
          "
        >
          <Link href="../crEvent">Create Your First Event</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
