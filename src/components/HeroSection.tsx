// components/HeroSection.tsx
export default function HeroSection() {
    return (
      <div className="flex flex-col items-center gap-10 mt-8 sm:mt-16">
        <div className="text-center">
          <div className="text-[#35A6F0] text-[16px] font-bold">Welcome</div>
          <p className="text-[32px] sm:text-[42px] lg:text-[58px] font-bold text-[#ffffff] leading-[40px] sm:leading-[56px] mt-4">
            Selling on the <br /> internet like a pro
          </p>
          <p className="text-[#ffffff] mt-4 max-w-[90%] sm:max-w-[542px] mx-auto leading-[30px]">
            We know how large objects will act, but things on a <br /> small scale just do not act that way.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 mt-10 justify-center items-center">
            <button className="bg-[#35A6F0] text-white px-6 py-2 rounded">Get Quote Now</button>
            <button className="border border-[#35A6F0] text-[#35A6F0] px-6 py-2 rounded">Learn More</button>
          </div>
        </div>
      </div>
    );
  }