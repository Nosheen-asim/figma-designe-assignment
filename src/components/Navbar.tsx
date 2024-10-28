// components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Name */}
          <div className="text-white text-[24px] font-bold mt-2">
            <span>BrandName</span>
          </div>
  
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 text-white text-[14px] leading-[24px]">
            <span>Home</span>
            <span>Product</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>
  
          {/* Login and Join Us Buttons */}
          <div className="flex space-x-4">
            <span className="text-[#ffffff] text-[14px] hover:text-[#cccccc]">Login</span>
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded text-[14px]">
              JOIN US
            </button>
          </div>
        </div>
         </nav>
  );
}  