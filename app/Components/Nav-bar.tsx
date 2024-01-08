"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] mb-5 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/White-Perkox.png"
            alt="logo"
            width={130}
            height={90}
            className="cursor-pointer min-w-[130px] mt-2 hover:animate-slowspin"
          />
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-100">
            <Link className="flex items-center" href="/">
              <div className="mr-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.18 1.89312L2.58667 4.69312C1.98667 5.15978 1.5 6.15312 1.5 6.90645V11.8464C1.5 13.3931 2.76 14.6598 4.30667 14.6598H12.0267C13.5733 14.6598 14.8333 13.3931 14.8333 11.8531V6.99978C14.8333 6.19312 14.2933 5.15978 13.6333 4.69978L9.51333 1.81312C8.58 1.15978 7.08 1.19312 6.18 1.89312Z"
                    stroke="#A0AEC0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.16602 11.9932V9.99316"
                    stroke="#A0AEC0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              Home
            </Link>
            <Link className="flex items-center" href="actavities">
              <div className="mr-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.49967 14.6663H10.4997C13.833 14.6663 15.1663 13.333 15.1663 9.99967V5.99967C15.1663 2.66634 13.833 1.33301 10.4997 1.33301H6.49967C3.16634 1.33301 1.83301 2.66634 1.83301 5.99967V9.99967C1.83301 13.333 3.16634 14.6663 6.49967 14.6663Z"
                    stroke="#A0AEC0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M5.38672 9.65984L6.97339 7.59984C7.20005 7.30651 7.62005 7.25318 7.91339 7.47984L9.13339 8.43984C9.42672 8.66651 9.84672 8.61318 10.0734 8.32651L11.6134 6.33984"
                    stroke="#A0AEC0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              Actavities
            </Link>
            <Link className="flex items-center" href="Settings">
              <div className="mr-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_5075_34923"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="14"
                    height="15"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.66699 1.33398H14.5236V15.148H1.66699V1.33398Z"
                      fill="white"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_5075_34923)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.13521 11.6273C5.28787 11.6273 5.44054 11.6467 5.58987 11.6867C6.04054 11.808 6.43187 12.1093 6.66387 12.514C6.81454 12.768 6.89787 13.0646 6.90054 13.3673C6.90054 13.8006 7.24854 14.148 7.67654 14.148H8.51187C8.93787 14.148 9.28587 13.8026 9.28787 13.3766C9.28521 12.906 9.46921 12.4587 9.80587 12.122C10.1379 11.79 10.6019 11.5907 11.0659 11.604C11.3699 11.6113 11.6625 11.6933 11.9205 11.84C12.2919 12.0527 12.7659 11.926 12.9805 11.5593L13.4232 10.8213C13.5219 10.6513 13.5505 10.438 13.4979 10.2413C13.4459 10.0447 13.3152 9.87398 13.1392 9.77332C12.7272 9.53598 12.4332 9.15332 12.3112 8.69465C12.1905 8.24465 12.2565 7.75332 12.4919 7.34865C12.6452 7.08198 12.8699 6.85732 13.1392 6.70265C13.5005 6.49132 13.6272 6.01865 13.4172 5.65065C13.4085 5.63598 13.4005 5.62065 13.3939 5.60465L13.0032 4.92732C12.7905 4.55732 12.3172 4.42998 11.9459 4.64132C11.5445 4.87865 11.0672 4.94665 10.6085 4.82598C10.1505 4.70732 9.76654 4.41732 9.52721 4.00798C9.37387 3.75198 9.29054 3.45398 9.28787 3.15065C9.29387 2.92265 9.21387 2.71798 9.06854 2.56798C8.92387 2.41865 8.72054 2.33398 8.51187 2.33398H7.67654C7.46987 2.33398 7.27654 2.41465 7.13054 2.55998C6.98521 2.70598 6.90587 2.89998 6.90721 3.10665C6.89321 4.08132 6.09654 4.86598 5.13187 4.86598C4.82254 4.86265 4.52454 4.77932 4.26587 4.62465C3.90254 4.41798 3.42787 4.54532 3.21521 4.91532L2.76387 5.65732C2.55721 6.01598 2.68387 6.48998 3.05187 6.70398C3.59787 7.01998 3.93854 7.60932 3.93854 8.24132C3.93854 8.87332 3.59787 9.46198 3.05054 9.77865C2.68454 9.99065 2.55787 10.462 2.76987 10.8287L3.19054 11.554C3.29454 11.7413 3.46454 11.8767 3.66121 11.932C3.85721 11.9867 4.07321 11.9633 4.25321 11.8633C4.51787 11.708 4.82587 11.6273 5.13521 11.6273ZM8.51187 15.148H7.67654C6.69721 15.148 5.90054 14.352 5.90054 13.3727C5.89921 13.252 5.86454 13.1266 5.79987 13.018C5.69521 12.8353 5.52587 12.7047 5.33054 12.6527C5.13654 12.6007 4.92387 12.6293 4.74921 12.7306C4.33054 12.964 3.83787 13.0207 3.38721 12.894C2.93721 12.7667 2.54854 12.4573 2.32054 12.0473L1.90387 11.3293C1.41654 10.484 1.70654 9.40065 2.55054 8.91265C2.78987 8.77465 2.93854 8.51732 2.93854 8.24132C2.93854 7.96532 2.78987 7.70732 2.55054 7.56932C1.70587 7.07865 1.41654 5.99265 1.90321 5.14732L2.35521 4.40532C2.83587 3.56932 3.92254 3.27465 4.76987 3.76132C4.88521 3.82998 5.01054 3.86465 5.13787 3.86598C5.55321 3.86598 5.90054 3.52332 5.90721 3.10198C5.90454 2.63732 6.08787 2.19132 6.42187 1.85465C6.75721 1.51865 7.20254 1.33398 7.67654 1.33398H8.51187C8.98921 1.33398 9.45321 1.52998 9.78587 1.87065C10.1179 2.21332 10.3012 2.68332 10.2872 3.15998C10.2885 3.26732 10.3239 3.39132 10.3879 3.49998C10.4939 3.67998 10.6612 3.80665 10.8599 3.85865C11.0585 3.90798 11.2665 3.88132 11.4432 3.77665C12.2965 3.28932 13.3825 3.58132 13.8699 4.42798L14.2852 5.14732C14.2959 5.16665 14.3052 5.18532 14.3132 5.20465C14.7545 6.03865 14.4599 7.08865 13.6399 7.56798C13.5205 7.63665 13.4239 7.73265 13.3572 7.84865C13.2539 8.02798 13.2252 8.24132 13.2772 8.43732C13.3305 8.63732 13.4579 8.80332 13.6372 8.90598C14.0419 9.13865 14.3439 9.53065 14.4645 9.98332C14.5852 10.4353 14.5192 10.926 14.2839 11.3307L13.8412 12.068C13.3539 12.9053 12.2679 13.1953 11.4232 12.7073C11.3105 12.6426 11.1805 12.6073 11.0512 12.604H11.0472C10.8545 12.604 10.6565 12.686 10.5125 12.8293C10.3665 12.9753 10.2865 13.17 10.2879 13.3766C10.2832 14.356 9.48654 15.148 8.51187 15.148Z"
                      fill="#A0AEC0"
                    ></path>
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.09718 6.9834C7.40384 6.9834 6.83984 7.54807 6.83984 8.2414C6.83984 8.93473 7.40384 9.49806 8.09718 9.49806C8.79051 9.49806 9.35451 8.93473 9.35451 8.2414C9.35451 7.54807 8.79051 6.9834 8.09718 6.9834ZM8.09718 10.4981C6.85251 10.4981 5.83984 9.48607 5.83984 8.2414C5.83984 6.99673 6.85251 5.9834 8.09718 5.9834C9.34184 5.9834 10.3545 6.99673 10.3545 8.2414C10.3545 9.48607 9.34184 10.4981 8.09718 10.4981Z"
                    fill="#A0AEC0"
                  ></path>
                </svg>
              </div>
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
