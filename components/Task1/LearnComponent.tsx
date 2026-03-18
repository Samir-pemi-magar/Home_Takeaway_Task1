import Image from "next/image";
import FloatingPerson from "../animations/FloatingPerson";
export default function LearnComponent() {
  return (
    <div className="w-148 h-85.25 bg-[#5492A0] relative rounded-[30px] overflow-visible justify-start flex pl-8.75 ">
      <div className="absolute left-0 top-0 w-[245px] h-[431px]">
        <FloatingPerson slide={5} duration={1.5}>
          <Image
            src="/Images/Learn.png"
            alt="Clarity"
            width={245}
            height={431}
            className="absolute top-1 left-87"
          />
        </FloatingPerson>
      </div>
      <div className="flex flex-col w-87.75 h-fit gap-8.5 mt-14.5">
        <div className="flex flex-col text-[#FFFFFF] gap-2.5 text-left">
          <span className="text-[32px] font-bold font-nohemi tracking-[0%]">
            Learn by Doing
          </span>
          <span className="font-medium text-[24px] font-outfit leading-[110%] tracking-[0%]">
            Practical skills, real projects.
          </span>
        </div>
        <p className="text-[#FAFAFA] flex-wrap wrap-normal text-[18px] font-normal font-outfit text-left leading-[120%] tracking-[0%]">
          Theory is great, but action is better. At SkillShikshya, you learn by
          doing. Hands-on projects and real-world scenarios help you build,
          break, and create—leading to true mastery.
        </p>
      </div>
    </div>
  );
}
