"use client";
import Image from "next/image";
import { act, useState } from "react";

export default function CardComponent() {
  const [activeId, setActive] = useState("card-1");
  const [previousId, setPreviousId] = useState<string | null>(null);
  const [isHoveringSecondCard, setIsHoveringSecondCard] = useState(false);
  const [isHoveringThirdCard, setIsHoveringThirdCard] = useState(false);

  const getCardPosition = (cardId: string) => {
    if (activeId === cardId) return "translate-x-0";
    if (
      (activeId === "card-1" && cardId === "card-2") ||
      (activeId === "card-2" && cardId === "card-3") ||
      (activeId === "card-1" && cardId === "card-3")
    )
      return "-translate-x-[450px]";
    return "translate-x-[450px]";
  };

  return (
    <div className="flex flex-row gap-[32px] items-center justify-center">
      <div
        className={`flex flex-col absolute top-48 gap-1 z-30 transition-all
    ${
      activeId === "card-1" && isHoveringSecondCard
        ? "left-[1090px] opacity-100"
        : activeId === "card-1" && isHoveringThirdCard
          ? "left-[1370px] opacity-100"
          : "opacity-0"
    }`}
      >
        <p className="font-outfit font-normal text-[#2B2B2B] text-[16px] -ml-3">
          Click me!
        </p>
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3_12292)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3722 29.2176C18.13 29.7982 16.729 29.9088 15.1983 29.3557C10.4634 27.6444 8.74736 23.7464 8.76245 19.2532C8.78469 12.6922 12.5531 4.85082 15.7229 1.03429C15.8728 0.853353 16.1409 0.829174 16.3208 0.979023C16.5017 1.12894 16.5269 1.39709 16.377 1.57803C13.3002 5.28211 9.63454 12.8891 9.61251 19.2566C9.59879 23.3823 11.1386 26.9845 15.4878 28.5557C16.7819 29.0242 17.9639 28.9269 19.0154 28.4387C18.707 27.7466 18.4221 27.0549 18.162 26.3648C17.4442 24.4594 16.519 19.2359 17.2191 15.4807C17.7221 12.7871 19.0583 10.8504 21.7008 11.0857C23.1696 11.2169 24.1769 12.1997 24.7372 13.6985C25.5087 15.7588 25.4183 18.836 24.6046 21.7392C23.9275 24.1565 22.753 26.4493 21.1963 27.9401C20.8535 28.2671 20.4935 28.5575 20.116 28.8028C24.5761 38.3201 33.3896 47.5085 42.7643 51.7357C42.9775 51.8328 43.0737 52.0838 42.9765 52.2981C42.8804 52.5125 42.6283 52.6076 42.415 52.5115C32.8877 48.2147 23.9268 38.8914 19.3722 29.2176ZM19.7576 28.0162C19.4691 27.3651 19.2022 26.7143 18.9578 26.0649C18.2705 24.2389 17.3844 19.2349 18.0553 15.6369C18.4668 13.4289 19.4598 11.7396 21.6256 11.9324C22.7629 12.0343 23.5063 12.8362 23.9415 13.9962C24.4189 15.2728 24.5263 16.9682 24.3258 18.7562C24.0215 21.4708 23.0043 24.3979 21.4254 26.4162C20.9256 27.0558 20.368 27.6027 19.7576 28.0162Z"
              fill="#2B2B2B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.042 37.374C36.5861 42.4169 39.5171 47.933 42.8036 51.8308C42.9548 52.0101 42.9316 52.2784 42.7524 52.4296C42.5732 52.5807 42.3047 52.5587 42.1535 52.3794C38.7639 48.3602 35.7581 42.6642 35.1968 37.4655C35.1715 37.2328 35.3405 37.0229 35.5742 36.9977C35.8069 36.9724 36.0167 37.1413 36.042 37.374Z"
              fill="#2B2B2B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.0932 52.4656C38.5634 50.1478 32.9673 49.5094 28.8089 50.3138C28.5783 50.3586 28.3544 50.2081 28.3107 49.9775C28.2659 49.7469 28.4162 49.5241 28.6469 49.4793C33.0033 48.6367 38.8616 49.3268 42.5598 51.755C42.7561 51.8833 42.8106 52.148 42.6823 52.3442C42.5529 52.5404 42.2894 52.5949 42.0932 52.4656Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_12292">
              <rect
                width="50"
                height="50"
                fill="white"
                transform="matrix(0.998071 0.0620871 0.0620871 -0.998071 0 49.9035)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <label
        htmlFor="card-1"
        className={`relative overflow-hidden flex flex-col justify-end cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] rounded-4xl bg-[#C33241] shadow-xl z-20 py-5
            ${activeId === "card-1" ? "w-148 h-115.25 px-20 " : "w-70 h-115.25 bg-[#C33241]/50"}
          `}
      >
        <input
          type="radio"
          name="Cards"
          id="card-1"
          className="hidden"
          checked={activeId === "card-1"}
          onChange={() => {
            setPreviousId(activeId);
            setActive("card-1");
          }}
        />

        <div
          className={`absolute -bottom-16 -left-25 rounded-full bg-white/80 transition-all duration-1000 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] z-0
              ${activeId === "card-1" ? "w-0 h-0" : "w-[600px] h-[600px]"}
            `}
        />
        <svg
          className={`-ml-2 -mt-3 absolute transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${activeId === "card-1" ? "left-[262px] top-[275px]" : "left-[230px] top-[271px]"}`}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4241 30.016H10.5921V19.152H9.58443e-05V10.864H10.5921V4.19617e-05H19.4241V10.864H30.0161V19.152H19.4241V30.016Z"
            fill={activeId === "card-1" ? "#e5ced0" : "#C33241"}
          />
        </svg>
        <div
          className={`absolute transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] flex flex-row gap-[24px] items-center justify-center origin-[15%_50%] ${activeId === "card-1" ? "rotate-0 left-[75px] top-[283px]" : "-rotate-90 top-[310px] left-[75px] "}`}
        >
          <span
            className={`relative text-[150px] font-bold transition-all ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] duration-800 font-nohemi ${activeId === "card-1" ? "text-[#e5ced0] rotate-0" : "text-[#C33241] rotate-90"} z-20 leading-none`}
          >
            23
          </span>

          <h1
            className={`flex flex-col transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)]  gap-[12px] ${activeId === "card-1" ? " text-[#e5ced0] right-1.25 -mt-10 bottom-18 " : " text-[#C33241] z-10 w-fit"}`}
          >
            <span
              className={`font-bold text-[32px] text-wrap wrap-normal leading-[100%] font-outfit ${activeId === "card-1" ? " w-[278px]" : "w-[164px]"}`}
            >
              All Courses
            </span>
            <span
              className={`text-[18px] font-normal font-outfit w-[218px] leading-[100%] text-wrap wrap-normal`}
            >
              courses you`re powering through right now.
            </span>
          </h1>
        </div>

        <div
          className={`absolute flex flex-row gap-5 top-33 w-[max-content] transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${getCardPosition("card-1")}`}
        >
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon1.png"
              alt="Clarity"
              width={94}
              height={94}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon2.png"
              alt="Clarity"
              width={80}
              height={84}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon3.png"
              alt="Clarity"
              width={116}
              height={130}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon4.png"
              alt="Clarity"
              width={90}
              height={90}
            />
          </div>
        </div>

        <div
          className={`absolute flex flex-row items-center gap-2 transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${activeId === "card-1" ? "top-10 right-10" : "top-10 -right-50"}`}
        >
          <p className="text-[#F9EBEC] text-[18px] font-semibold">
            View all Courses
          </p>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            className="animate-arrow-bounce"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.34171 0.341709C7.79732 -0.113903 8.53601 -0.113903 8.99162 0.341709L13.6583 5.00838C14.1139 5.46399 14.1139 6.20268 13.6583 6.65829L8.99162 11.325C8.53601 11.7806 7.79732 11.7806 7.34171 11.325C6.8861 10.8693 6.8861 10.1307 7.34171 9.67504L10.0168 7L1.16667 7C0.522335 7 -2.81646e-08 6.47767 0 5.83333C2.81647e-08 5.189 0.522335 4.66667 1.16667 4.66667H10.0168L7.34171 1.99163C6.8861 1.53601 6.8861 0.797321 7.34171 0.341709Z"
              fill="#F9EBEC"
            />
          </svg>
        </div>
      </label>

      <label
        htmlFor="card-2"
        onMouseEnter={() => setIsHoveringSecondCard(true)}
        onMouseLeave={() => setIsHoveringSecondCard(false)}
        className={`relative overflow-hidden flex flex-col justify-end block cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] rounded-4xl bg-[#C33241] shadow-xl z-20 py-5
            ${activeId === "card-2" ? "w-[592px] h-[461px] px-20" : "w-[280px] h-[461px] bg-[#C33241]/50 items-center"}
          `}
      >
        <input
          type="radio"
          name="Cards"
          id="card-2"
          className="hidden"
          checked={activeId === "card-2"}
          onChange={() => {
            setPreviousId(activeId);
            setActive("card-2");
          }}
        />

        <div
          className={`absolute -bottom-16 -left-25 rounded-full bg-white/80 transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] z-0
              ${activeId === "card-2" ? "w-0 h-0" : "w-[600px] h-[600px]"}
            `}
        />
        <svg
          className={`-ml-2 -mt-3 absolute transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${
            activeId === "card-2"
              ? "left-[244px] top-[273px]"
              : (isHoveringSecondCard && activeId !== "card-2") ||
                  (isHoveringThirdCard && activeId !== "card-3")
                ? "left-[230px] top-[275px]"
                : "left-[230px] top-[270px]"
          }`}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4241 30.016H10.5921V19.152H9.58443e-05V10.864H10.5921V4.19617e-05H19.4241V10.864H30.0161V19.152H19.4241V30.016Z"
            fill={activeId === "card-2" ? "#e5ced0" : "#C33241"}
          />
        </svg>
        <div
          className={`absolute transition-all  duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] flex flex-row gap-[22px] items-center justify-center origin-[15%_50%] ${activeId === "card-2" ? "rotate-0 left-[45px] top-[285px]" : "-rotate-90 top-[320px] left-[70px] "}`}
        >
          <span
            className={`relative text-[150px] font-bold transition-all ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] duration-800 font-nohemi ${activeId === "card-2" ? "text-[#e5ced0] rotate-0" : "text-[#C33241] rotate-90"} z-20 leading-none`}
          >
            05
          </span>

          <h1
            className={`flex flex-col gap-[12px]  transition-all ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] duration-800 ${activeId === "card-2" ? "right-1.25 text-[#e5ced0] -mt-10 bottom-18 " : " text-[#C33241] z-10 w-fit"}`}
          >
            <span
              className={`font-bold text-[32px] text-wrap wrap-normal leading-[100%] transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] font-outfit ${activeId === "card-2" ? " w-[278px]" : "w-[164px]"}`}
            >
              Upcoming Courses
            </span>
            <span
              className={`text-[18px] font-normal font-outfit w-[218px] leading-[100%] text-wrap wrap-normal `}
            >
              exciting new courses waiting to boost your skills.
            </span>
          </h1>
        </div>

        <div
          className={`absolute flex flex-row gap-5 top-33 w-[max-content] transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${getCardPosition("card-2")}`}
        >
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon1.png"
              alt="Clarity"
              width={94}
              height={94}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon2.png"
              alt="Clarity"
              width={80}
              height={84}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon3.png"
              alt="Clarity"
              width={116}
              height={130}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon4.png"
              alt="Clarity"
              width={90}
              height={90}
            />
          </div>
        </div>

        <div
          className={`absolute flex flex-row items-center gap-2 transition-all ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] duration-800  ${activeId === "card-2" ? "top-10 right-10" : "top-10 -right-50"}`}
        >
          <p className="text-[#F9EBEC] text-[18px] font-semibold">
            View all Courses
          </p>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            className="animate-arrow-bounce"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.34171 0.341709C7.79732 -0.113903 8.53601 -0.113903 8.99162 0.341709L13.6583 5.00838C14.1139 5.46399 14.1139 6.20268 13.6583 6.65829L8.99162 11.325C8.53601 11.7806 7.79732 11.7806 7.34171 11.325C6.8861 10.8693 6.8861 10.1307 7.34171 9.67504L10.0168 7L1.16667 7C0.522335 7 -2.81646e-08 6.47767 0 5.83333C2.81647e-08 5.189 0.522335 4.66667 1.16667 4.66667H10.0168L7.34171 1.99163C6.8861 1.53601 6.8861 0.797321 7.34171 0.341709Z"
              fill="#F9EBEC"
            />
          </svg>
        </div>
      </label>

      <label
        htmlFor="card-3"
        onMouseEnter={() => setIsHoveringThirdCard(true)}
        onMouseLeave={() => setIsHoveringThirdCard(false)}
        className={`relative overflow-hidden flex flex-col justify-end block cursor-pointer transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] rounded-4xl bg-[#C33241] shadow-xl z-20 py-5
            ${activeId === "card-3" ? "w-[592px] h-[461px] px-20" : "w-[280px] h-[461px] bg-[#C33241]/50 items-center"}
          `}
      >
        <input
          type="radio"
          name="Cards"
          id="card-3"
          className="hidden"
          checked={activeId === "card-3"}
          onChange={() => {
            setPreviousId(activeId);
            setActive("card-3");
          }}
        />

        <div
          className={`absolute -bottom-16 -left-25 rounded-full bg-white/80 transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] z-0
              ${activeId === "card-3" ? "w-0 h-0" : "w-[600px] h-[600px]"}
            `}
        />
        <svg
          className={`-ml-2 -mt-3 absolute transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${
            activeId === "card-3"
              ? "left-[240px] top-[282px]"
              : (isHoveringSecondCard && activeId !== "card-2") ||
                  (isHoveringThirdCard && activeId !== "card-3")
                ? "left-[210px] top-[278px]"
                : "left-[210px] top-[273px]"
          }`}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4241 30.016H10.5921V19.152H9.58443e-05V10.864H10.5921V4.19617e-05H19.4241V10.864H30.0161V19.152H19.4241V30.016Z"
            fill={activeId === "card-3" ? "#e5ced0" : "#C33241"}
          />
        </svg>
        <div
          className={`absolute transition-all  duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] flex flex-row gap-[24px] items-center justify-center origin-[15%_50%] ${activeId === "card-3" ? "rotate-0 left-[75px] top-[283px]" : "-rotate-90 top-[310px] left-[75px] "}`}
        >
          <span
            className={`relative text-[150px] font-bold font-nohemi transition-all ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] duration-800  ${activeId === "card-3" ? "text-[#e5ced0] rotate-0" : "text-[#C33241] rotate-90"} z-20 leading-none`}
          >
            10
          </span>

          <h1
            className={`flex flex-col gap-[12px] transition-all ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] duration-800  ${activeId === "card-3" ? "right-1.25 -mt-10 bottom-18 text-[#e5ced0] " : "text-[#C33241] z-10 w-fit"}`}
          >
            <span
              className={`font-bold text-[32px] text-wrap wrap-normal leading-[100%] transition-all ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] duration-800 font-outfit ${activeId === "card-3" ? " w-[278px]" : " w-[164px]"}`}
            >
              Ongoing Courses
            </span>
            <span
              className={`text-[18px] font-normal font-outfit w-[218px] leading-[100%] text-wrap wrap-normal"}`}
            >
              currently happening—don’t miss out on the action!
            </span>
          </h1>
        </div>

        <div
          className={`absolute flex flex-row gap-5 top-33 w-[max-content] transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${getCardPosition("card-3")}`}
        >
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon1.png"
              alt="Clarity"
              width={94}
              height={94}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon2.png"
              alt="Clarity"
              width={80}
              height={84}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon3.png"
              alt="Clarity"
              width={116}
              height={130}
            />
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/Images/Icon4.png"
              alt="Clarity"
              width={90}
              height={90}
            />
          </div>
        </div>

        <div
          className={`absolute flex flex-row items-center gap-2 transition-all duration-800 ease-[cubic-bezier(0.88,-0.34,0.53,1.26)] ${activeId === "card-3" ? "top-10 right-10" : "top-10 -right-50"}`}
        >
          <p className="text-[#F9EBEC] text-[18px] font-semibold">
            View all Courses
          </p>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            className="animate-arrow-bounce"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.34171 0.341709C7.79732 -0.113903 8.53601 -0.113903 8.99162 0.341709L13.6583 5.00838C14.1139 5.46399 14.1139 6.20268 13.6583 6.65829L8.99162 11.325C8.53601 11.7806 7.79732 11.7806 7.34171 11.325C6.8861 10.8693 6.8861 10.1307 7.34171 9.67504L10.0168 7L1.16667 7C0.522335 7 -2.81646e-08 6.47767 0 5.83333C2.81647e-08 5.189 0.522335 4.66667 1.16667 4.66667H10.0168L7.34171 1.99163C6.8861 1.53601 6.8861 0.797321 7.34171 0.341709Z"
              fill="#F9EBEC"
            />
          </svg>
        </div>
      </label>
    </div>
  );
}
