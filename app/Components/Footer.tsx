"use client";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { RxDiscordLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div
      className="w-full h-full font-bold   bg-transparent text-gray-200 p-[15px]"
      id="Footer"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <Link
              href="https://www.linkedin.com/in/youssef-salib-644aa5266/"
              passHref
              legacyBehavior={true}
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer text-blue-500">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </Link>

            <Link href="YoussefAmir311" passHref legacyBehavior={true}>
              <a className="flex flex-row items-center my-[15px] cursor-pointer text-purple-400">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </a>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <Link href="tel:+201063647856" passHref legacyBehavior={true}>
              <a className="flex flex-row items-center my-[15px] cursor-pointer ">
                TOS
              </a>
            </Link>

            <Link
              href="mailto:youssefsalib311@gmail.com"
              passHref
              legacyBehavior={true}
            >
              <a className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Privacy Policy</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          Support ID: 91331855
        </div>
      </div>
    </div>
  );
};

export default Footer;
