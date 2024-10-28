// components/CardSection.tsx
export default function CardSection() {
    return (
      <div className="flex flex-wrap justify-center mt-10 gap-6 mb-20">
        {/* First Card */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md w-full sm:w-[328px]">
          <div className="w-20 h-20 rounded-xl bg-[#FCEBEB] mx-auto mb-4"></div>
          <h2 className="font-bold mt-4">Training Courses</h2>
          <div className="h-[2px] bg-[#FFDCD1] w-[50px] my-2"></div>
          <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
   {/* Second Card */}
   <div className="bg-white text-black p-6 rounded-lg shadow-md w-full sm:w-[328px]">
        <div className="w-20 h-20 rounded-xl bg-[#B9EAA8] mx-auto mb-4"></div>
        <h2 className="font-bold mt-4">2,769 Online Courses</h2>
        <div className="h-[2px] bg-[#E74040] w-[50px] my-2"></div>
        <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
      </div>

      {/* Third Card */}
      <div className="bg-[#35A6F0] text-white p-6 rounded-lg shadow-md w-full sm:w-[328px]">
        <div className="w-20 h-20 rounded-xl bg-white mx-auto mb-4"></div>
        <h2 className="font-bold mt-4">Special Feature</h2>
        <div className="h-[2px] bg-white w-[50px] my-2"></div>
        <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
      </div>
    </div>
  );
}
