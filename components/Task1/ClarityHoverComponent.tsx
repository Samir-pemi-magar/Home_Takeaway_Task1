import Image from "next/image";
import FloatingPerson from "../animations/FloatingPerson";

export default function ClarityHoverComponent() {
  return (
    <div className="relative w-[592px] h-[341px]">
      <svg
        width="592"
        height="341"
        viewBox="0 0 592 341"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <path
          d="M560 0C577.673 8.76194e-06 592 14.3269 592 32V97.8274C592 109.227 579.4 117 568 117C538.729 117 515 140.729 515 170C515 199.271 538.729 223 568 223C579.4 223 592 230.772 592 242.172V309C592 326.673 577.673 341 560 341H32C14.3269 341 0 326.673 0 309V242.172C0 230.772 12.6002 223 24 223C53.2711 223 77 199.271 77 170C77 140.729 53.2711 117 24 117C12.6002 117 0 109.227 0 97.8274V32C5.47654e-06 14.3269 14.3269 0 32 0H560Z"
          fill="#F45B5B"
        />
      </svg>
      <div className="absolute left-0 bottom-0 w-[352px] h-[323px]">
        <Image
          src="/Images/ClarityHuman.png"
          alt="Clarity"
          width={352}
          height={323}
          className="absolute bottom-0 left-6 z-10"
        />
      </div>
      <div className="absolute left-0 bottom-0 w-[352px] h-[323px]">
        <Image
          src="/Images/ClarityHumanShadow.png"
          alt="Clarity"
          width={352}
          height={323}
          className="absolute bottom-0 left-9 z-0"
        />
      </div>
      <div className="absolute left-0 top-0 w-[105px] h-[105px]">
        <Image
          src="/Images/ClarityWoW.png"
          alt="Clarity"
          width={105}
          height={105}
          className="absolute top-5.5 left-17"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-[105px] h-[105px]">
        <Image
          src="/Images/ClarityWoW.png"
          alt="Clarity"
          width={105}
          height={105}
          className="absolute bottom-6 right-25 transform -scale-x-100 rotate-25"
        />
      </div>
      <span className="font-bold text-[20px] font-nohemi text-white absolute top-13 right-7 w-[241px]">
        Clarity unlocked—stickers, sips, and skills all in one go!
      </span>
      <button className="bg-[#FAFAFA] rounded-full p-4 shadow-[0px_12px_12px_rgba(0,0,0,0.3)] absolute top-34 left-px border border-[#1018281f]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5898 25.3899C15.043 25.9366 14.1566 25.9366 13.6099 25.3899L5.20986 16.9899C4.66312 16.4432 4.66312 15.5567 5.20986 15.01L13.6099 6.61C14.1566 6.06327 15.043 6.06327 15.5898 6.61C16.1365 7.15674 16.1365 8.04317 15.5898 8.5899L9.5797 14.6H25.7998C26.573 14.6 27.1998 15.2268 27.1998 16C27.1998 16.7732 26.573 17.4 25.7998 17.4L9.5797 17.4L15.5898 23.41C16.1365 23.9567 16.1365 24.8432 15.5898 25.3899Z"
            fill="#1F2937"
          />
        </svg>
      </button>
      <button className="bg-[#FAFAFA] rounded-full p-4 shadow-[0px_12px_12px_rgba(0,0,0,0.3)] absolute top-34 right-px -scale-x-100 border border-[#1018281f]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5898 25.3899C15.043 25.9366 14.1566 25.9366 13.6099 25.3899L5.20986 16.9899C4.66312 16.4432 4.66312 15.5567 5.20986 15.01L13.6099 6.61C14.1566 6.06327 15.043 6.06327 15.5898 6.61C16.1365 7.15674 16.1365 8.04317 15.5898 8.5899L9.5797 14.6H25.7998C26.573 14.6 27.1998 15.2268 27.1998 16C27.1998 16.7732 26.573 17.4 25.7998 17.4L9.5797 17.4L15.5898 23.41C16.1365 23.9567 16.1365 24.8432 15.5898 25.3899Z"
            fill="#1F2937"
          />
        </svg>
      </button>
    </div>
  );
}
