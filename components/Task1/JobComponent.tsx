import Image from "next/image";
import FloatingPerson from "../animations/FloatingPerson";
export default function JobComponent() {
  return (
    <div className="w-148 h-85.25 bg-[#A88964] relative rounded-[30px] overflow-visible justify-start flex pl-8.75 ">
      <div className="absolute left-0 top-0 w-[340px] h-[378px]">
        <FloatingPerson slide={5} duration={1.5}>
          <Image
            src="/Images/Job.png"
            alt="Clarity"
            width={340}
            height={378}
            className="absolute top-14.5 left-74.5"
          />
        </FloatingPerson>
      </div>
      <div className="flex flex-col w-92 h-fit gap-8.5 mt-14.5">
        <div className="flex flex-col text-[#FFFFFF] gap-2.5 text-left">
          <span className="text-[32px] font-bold font-nohemi tracking-[0%]">
            Achieve & Showcase
          </span>
          <span className="font-medium text-[24px] font-outfit leading-[110%] tracking-[0%]">
            Build your portfolio, get job-ready.
          </span>
        </div>
        <p className="text-[#FAFAFA] flex-wrap wrap-normal text-[18px] font-normal font-outfit text-left leading-[120%] tracking-[0%]">
          Your journey ends with achievement. Each completed project builds a
          portfolio showcasing your skills and job readiness, bringing you
          closer to that dream job, promotion, or your own venture.
        </p>
      </div>
    </div>
  );
}
