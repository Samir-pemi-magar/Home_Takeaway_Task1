import ClarityFullComponent from "@/components/Task1/ClarityFullComponent";
import JobComponent from "@/components/Task1/JobComponent";
import LearnHoverFullComponent from "@/components/Task1/LearnHoverFullComponent";
import MentorComponent from "@/components/Task1/MentorComponent";

export default function Task1() {
  return (
    <div className="w-full h-screen flex gap-5.5 flex-col items-center">
      <section className="flex flex-col gap-5 mt-[53px] gap-[22px] max-w-[1200px] w-full">
        <span className="text-[##333333] font-medium text-[32px] leading-[100%] tracking-[0%] pl-[54px] font-fustat">
          Note: Hover the component to view the animation & Click the arrow icon
        </span>
        <div className="flex flex-col gap-[24px] w-full">
          <span className="font-medium text-[24px] font-outfit">
            Your SkillShikshya Journey
          </span>
          <h1 className="font-bold text-[32px] font-nohemi leading-[120%] flex flex-wrap gap-x-2 gap-y-2">
            <span className="text-green-500">Step</span> In.
            <span className="text-green-500">Skill</span> Up.
            <span className="text-green-500">Stand</span> Out. 🚀
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-y-[40.17px] gap-x-[32px] w-[1200px]">
        <ClarityFullComponent />
        <LearnHoverFullComponent />
        <MentorComponent />
        <JobComponent />
      </section>
    </div>
  );
}
