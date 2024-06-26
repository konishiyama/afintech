"use client";

import Link from "next/link";
import Image from "next/image";
import Layout from "./layouts/Layout";
import coverImage from "/public/images/Currency-rafiki.png";
import { CoverProps } from "@/interfaces";

const Cover = ({ cover_props }: CoverProps) => {
  return (
    <Layout backgroundColor="bg-white">
      <div className="flex flex-wrap items-center -mx-3 xl:px-16 pt-8 md:pt-16 lg:pt-0">
        <div className="w-full lg:w-1/2 px-3">
          <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
              {cover_props.headline1}
              <span className="text-blue-500">{cover_props.headline2}</span>
              {cover_props.headline3}
            </h2>
            <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
              {cover_props.comment1}
              <strong className="text-blue-500">{cover_props.comment2}</strong>
              {cover_props.comment3}
            </div>
            <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">
              {cover_props.comment4}
            </p>
          </div>
          <div className="text-center lg:text-left">
            <Link
              className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded wow animate__animated animate__fadeIn"
              href="#Join"
            >
              {cover_props.button1}
            </Link>
            <Link
              className="block sm:inline-block hover-up-2 py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
              href="#Team"
            >
              {cover_props.button2}
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
          <div className="relative lg:h-128 flex items-center lg:justify-end justify-center">
            <Image
              src={coverImage}
              alt="Afin Tech Logo"
              className="lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cover;
