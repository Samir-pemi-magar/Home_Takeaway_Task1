import CardComponent from "@/components/Task2/CardComponent";

export default function Task2() {
  return (
    <div className="w-full h-screen flex gap-[48px] flex-col items-center">
      <section className="flex flex-col gap-5 mt-[53px] gap-[22px] max-w-[1200px] w-full">
        <span className="text-[##333333] font-medium font-fustat text-[32px] leading-[100%] tracking-[0%] justify-center flex">
          Note: Click the cards to view the animation
        </span>
        <div className="flex flex-col gap-[24px] w-full">
          <span className="font-medium text-[24px] font-outfit">
            Explore our classes and master trending skills!
          </span>
          <h1 className="font-bold text-[32px] font-nohemi leading-[120%] flex flex-wrap gap-x-2 gap-y-2">
            <span>Dive Into</span>
            <span className="text-green-500">What’s Hot Right Now!</span> Out.
            🚀
          </h1>
        </div>
      </section>
      <CardComponent />
    </div>
  );
}
