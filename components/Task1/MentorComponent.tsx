import Image from "next/image";
import FloatingPerson from "../animations/FloatingPerson";
export default function MentorComponent() {
  return (
    <div className="w-148 h-85.25 bg-[#6C64A8] relative rounded-[30px] overflow-visible justify-end flex pr-8.75 ">
      <div className="absolute left-0 top-0 w-[372px] h-[314px]">
        <FloatingPerson slide={5} duration={1.5}>
          <Image
            src="/Images/Mentor.png"
            alt="Clarity"
            width={372}
            height={314}
            className="absolute top-23 -left-20"
          />
        </FloatingPerson>
      </div>
      <div className="flex flex-col w-104.25 h-fit gap-8.5 mt-14.5 items-center">
        <div className="flex flex-col text-[#FFFFFF] gap-2.5 text-right items-end">
          <span className="text-[32px] font-bold font-nohemi tracking-[0%]">
            Get Mentored & Supported
          </span>
          <span className="font-medium text-[24px] font-outfit leading-[110%] tracking-[0%] w-68.5">
            You`re not learning alone.
          </span>
        </div>
        <p className="text-[#FAFAFA] w-78.5 h-34 flex-wrap wrap-normal text-[18px] font-normal font-outfit self-end text-right leading-[120%] tracking-[0%]">
          Stuck or need feedback? SkillShikshya`s community of mentors and
          learners has your back with live support, interactive discussions, and
          expert insights. You`re never on your own.
        </p>
      </div>
    </div>
  );
}
