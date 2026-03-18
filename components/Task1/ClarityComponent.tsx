import Image from "next/image";
import FloatingPerson from "../animations/FloatingPerson";
export default function ClarityComponent() {
  return (
    <div className="w-148 h-85.25 bg-[#F45B5B] relative rounded-[30px] overflow-visible justify-end flex pr-8.75 ">
      <div className="absolute left-0 top-0 w-[322px] h-[403px]">
        <FloatingPerson slide={5} duration={1.5}>
          <Image
            src="/Images/Clarity.png"
            alt="Clarity"
            width={322}
            height={403}
            className="absolute top-3 -left-20"
          />
        </FloatingPerson>
      </div>
      <div className="flex flex-col w-87.75 h-fit gap-8.5 mt-14.5">
        <div className="flex flex-col text-[#FFFFFF] gap-2.5 text-right">
          <span className="text-[32px] font-bold font-nohemi tracking-[0%]">
            Start with Clarity
          </span>
          <span className="font-medium text-[24px] font-outfit leading-[110%] tracking-[0%]">
            Step into a better learning path.
          </span>
        </div>
        <p className="text-[#FAFAFA] flex-wrap wrap-normal text-[18px] font-normal font-outfit text-right leading-[120%] tracking-[0%]">
          Overwhelmed by too many learning options? SkillShikshya provides a
          clear, curated roadmap from the start. Whether you`re a beginner or
          upskilling, we have a path tailored to your growth.
        </p>
      </div>
    </div>
  );
}
