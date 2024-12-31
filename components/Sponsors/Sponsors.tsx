import Image from "next/image";
import sponsors from "./SponsorData";
import Sponsor from "./Sponsor"

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
      <div className="flex flex-col items-center gap-12 m-auto w-[95%] md:w-full">
        {/* Gold Sponsors */}
        {sponsors.gold.length > 0 && (
          <div className="flex flex-col items-center gap-12 py-12 mb-12">
            <div className="flex justify-center gap-12 lg:gap-24">
              {sponsors.gold.map((sponsor: Sponsor, index: number) => (
                <a
                  key={`gold-${index}`}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-[450px] lg:max-w-[585px]"
                >
                  <Image
                    src={sponsor.image}
                    alt={`Gold Sponsor ${index + 1}`}
                    width={585}
                    height={455}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Silver Sponsors */}
      <div className="flex flex-col items-center gap-12 m-auto w-[95%] md:w-full mb-12">
        {sponsors.silver.length > 0 && (
          <div className="flex justify-center gap-12 lg:gap-24">
            {sponsors.silver.map((sponsor: Sponsor, index: number) => (
              <a
                key={`silver-${index}`}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[450px] lg:max-w-[585px]"
              >
                <Image
                  src={sponsor.image}
                  alt={`Silver Sponsor ${index + 1}`}
                  width={390}
                  height={275}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Bronze Sponsors */}
      {sponsors.bronze.length > 0 && (
        <div className="flex flex-col items-center gap-12 mb-12">
          <div className="flex justify-center gap-12 lg:gap-24">
            {sponsors.bronze.map((sponsor: Sponsor, index: number) => (
              <a
                key={`bronze-${index}`}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[450px] lg:max-w-[585px]"
              >
                <Image
                  src={sponsor.image}
                  alt={`Bronze Sponsor ${index + 1}`}
                  width={260}
                  height={145}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Collaborators Section */}
      {sponsors.collaborators.length > 0 && (
        <div className="w-full flex flex-col items-center justify-center mb-12">
          <h3 className="text-3xl font-bold purpleText text-center mb-6">
            Collaborators
          </h3>
          <div className="flex justify-center gap-12 lg:gap-24">
            {sponsors.collaborators.map((sponsor: Sponsor, index: number) => (
              <a
                key={`collaborator-${index}`}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[450px] lg:max-w-[585px]"
              >
                <Image
                  src={sponsor.image}
                  alt={`Collaborator ${index + 1}`}
                  width={260}
                  height={145}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* In-Kind Sponsors Section */}
      {sponsors.inkind.length > 0 && (
        <div className="w-full flex flex-col items-center justify-center mb-12">
          <h3 className="text-3xl font-bold purpleText text-center mb-6">
            In-Kind Sponsors
          </h3>
          <div className="flex justify-center gap-12 lg:gap-24">
            {sponsors.inkind.map((sponsor: Sponsor, index: number) => (
              <a
                key={`inkind-${index}`}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[450px] lg:max-w-[585px]"
              >
                <Image
                  src={sponsor.image}
                  alt={`In-Kind Sponsor ${index + 1}`}
                  width={125}
                  height={125}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Sponsors;
