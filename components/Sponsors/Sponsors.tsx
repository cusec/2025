import Image from "next/image";
import sponsors from "./SponsorData";

const Sponsors = () => {
  return (
    <section className="w-full py-12 mainGradientBackground">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold purpleText">Our Sponsors</h2>
      </div>

      {/* Sponsors Layout */}
      <div className="flex flex-col items-center space-y-12">
        {/* Gold Sponsors */}
        {sponsors.gold.length > 0 && (
          <div className="flex justify-center space-x-8">
            {sponsors.gold.map((logo: string, index: number) => (
              <Image
                key={`gold-${index}`}
                src={logo}
                alt={`Gold Sponsor ${index + 1}`}
                width={450}
                height={300}
                className="object-contain"
              />
            ))}
          </div>
        )}

        {/* Silver Sponsors */}
        {sponsors.silver.length > 0 && (
          <div className="flex justify-center space-x-6">
            {sponsors.silver.map((logo: string, index: number) => (
              <Image
                key={`silver-${index}`}
                src={logo}
                alt={`Silver Sponsor ${index + 1}`}
                width={300}
                height={200}
                className="object-contain"
              />
            ))}
          </div>
        )}

        {/* Bronze Sponsors */}
        {sponsors.bronze.length > 0 && (
          <div className="flex justify-center space-x-4">
            {sponsors.bronze.map((logo: string, index: number) => (
              <Image
                key={`bronze-${index}`}
                src={logo}
                alt={`Bronze Sponsor ${index + 1}`}
                width={200}
                height={110}
                className="object-contain"
              />
            ))}
          </div>
        )}

        {/* Collaborators Section */}
        {sponsors.collaborators.length > 0 && (
          <div className="w-full">
            <h3 className="text-3xl font-bold purpleText text-center mb-6">
              Collaborators
            </h3>
            <div className="flex justify-center space-x-3">
              {sponsors.collaborators.map((logo: string, index: number) => (
                <Image
                  key={`collaborators-${index}`}
                  src={logo}
                  alt={`Collaborator ${index + 1}`}
                  width={250}
                  height={125}
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
            <div className="flex justify-center space-x-3">
              {sponsors.inkind.map((logo: string, index: number) => (
                <Image
                  key={`inkind-${index}`}
                  src={logo}
                  alt={`In-Kind Sponsor ${index + 1}`}
                  width={125}
                  height={125}
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
