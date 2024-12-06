import Image from "next/image";
import sponsors from "./SponsorData";

const Sponsors = () => {
  return (
    <section className="w-full py-12 mainGradientBackground" id="sponsors">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold purpleText">
          OUR SPONSORS
        </h2>
      </div>

      {/* Sponsors Layout */}
      <div className="flex flex-col items-center gap-12">
        {/* Gold Sponsors */}
        {sponsors.gold.length > 0 && (
          <div className="flex justify-center gap-24">
            {sponsors.gold.map((logo: string, index: number) => (
              <Image
                key={`gold-${index}`}
                src={logo}
                alt={`Gold Sponsor ${index + 1}`}
                width={585}
                height={455}
                className="object-contain"
              />
            ))}
          </div>
        )}

        {/* Silver Sponsors */}
        <div className="flex justify-center gap-24">
          {sponsors.silver.map((logo: string, index: number) => (
            <Image
              key={`silver-${index}`}
              src={logo}
              alt={`Silver Sponsor ${index + 1}`}
              width={390}
              height={260}
              className="object-contain"
            />
          ))}
        </div>

        {/* Bronze Sponsors */}
        <div className="flex justify-center gap-24">
          {sponsors.bronze.map((logo: string, index: number) => (
            <Image
              key={`bronze-${index}`}
              src={logo}
              alt={`Bronze Sponsor ${index + 1}`}
              width={260}
              height={145}
              className="object-contain"
            />
          ))}
        </div>

        {/* Collaborators Section */}
        {sponsors.collaborators.length > 0 && (
          <div className="w-full">
            <h3 className="text-3xl font-bold purpleText text-center mb-6">
              Collaborators
            </h3>
            <div className="flex justify-center gap-24">
              {sponsors.collaborators.map((logo: string, index: number) => (
                <Image
                  key={`collaborators-${index}`}
                  src={logo}
                  alt={`Collaborator ${index + 1}`}
                  width={260}
                  height={145}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        )}

        {/* In-Kind Sponsors Section */}
        {sponsors.inkind.length > 0 && (
          <div className="w-full">
            <h3 className="text-3xl font-bold purpleText text-center mb-6">
              In-Kind Sponsors
            </h3>
            <div className="flex justify-center gap-24">
              {sponsors.inkind.map((logo: string, index: number) => (
                <Image
                  key={`inkind-${index}`}
                  src={logo}
                  alt={`In-Kind Sponsor ${index + 1}`}
                  width={165}
                  height={165}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sponsors;
