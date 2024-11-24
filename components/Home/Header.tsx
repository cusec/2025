import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full py-8 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[90%] mx-auto px-4 gap-6">
      {/* Left Content */}
        <div className="flex flex-row items-center gap-4 md:justify-start justify-center w-full md:w-auto">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Image
              className="w-[75px] h-[75px] max-w-[250px] max-h-[250px]"
              src="/images/logo-main.svg"
              alt="2025 logo main"
              width={1080}
              height={1080}
              priority
            />
            <div className="flex flex-col items-center">
              <h3 className="text-[40px] purpleText font-bold leading-[80%]">
                CUSEC
              </h3>
              <h3 className="text-[40px] lightPurpleText font-bold leading-[80%]">
                2025
              </h3>
            </div>
          </div>

          {/* Purple Line Divider */}
          <div className="hidden md:block w-[2px] h-[60px] bg-[--light-purple] mx-[10px]"></div>

          {/* Conference Description */}
          <p className="textFont text-base font-extrabold leading-tight text-center md:text-left">
            Canadian University <br />
            Software Engineering <br />
            Conference
          </p>
        </div>

        {/* Right Content */}
        <div className="hidden md:flex items-center justify-end w-1/2 text-right">
          <h3 className="text-2xl uppercase text-[--purple] font-[650] font-[Roboto Condensed]">
            Canada's Longest Running Student-Ran <br /> Tech Conference
          </h3>
        </div>
      </div>
    </div>
  );
}
