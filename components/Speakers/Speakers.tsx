import React from "react";
import speakersData from "./speakers.json";
import Speaker from "./Speaker";
import SpeakerCard from "./SpeakerCard";
import KeynoteSpeakerCard from "./KeynoteSpeakerCard";

const speakers: Speaker[] = speakersData as Speaker[];

const Speakers = () => {
  const keynotes = speakers.filter((speaker) => speaker.type === "keynote");
  const remainingSpeakers = speakers.filter(
    (speaker) => speaker.type !== "keynote"
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-5xl md:text-7xl font-bold whiteText mb-8">
        OUR SPEAKERS
      </h2>
      {keynotes.map((speaker) => (
        <KeynoteSpeakerCard key={speaker.name} speaker={speaker} />
      ))}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {remainingSpeakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
