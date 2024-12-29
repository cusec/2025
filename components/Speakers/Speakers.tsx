import React from 'react';
import speakers from './speakers.json';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';

interface Speaker {
  name: string;
  role: string;
  type: 'keynote' | 'speaker' | 'panelist';
  pronouns: string;
  image: string;
  description: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
    website: string;
  };
}

type IconConfig = {
  prop: keyof Speaker['social'];
  classes: string;
  IconComponent: React.ElementType;
};

const iconConfigs: IconConfig[] = [
  {
    prop: "twitter",
    classes: "border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2]",
    IconComponent: AiFillTwitterCircle,
  },
  {
    prop: "linkedin",
    classes: "border-[#05a7ff] text-[#05a7ff] hover:bg-[#05a7ff]",
    IconComponent: AiFillLinkedin,
  },
  {
    prop: "github",
    classes: "border-gray-500 text-gray-500 hover:bg-gray-500",
    IconComponent: AiFillGithub,
  },
  {
    prop: "website",
    classes: "border-green-500 text-green-500 hover:bg-green-500",
    IconComponent: FiGlobe,
  },
];


const SpeakersPage = () => {
  const keynotes = speakers.filter((speaker) => speaker.type === 'keynote');
  const remainingSpeakers = speakers.filter((speaker) => speaker.type !== 'keynote');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 RobotoText">Speakers</h1>
      {keynotes.map((speaker) => (
        <div key={speaker.name} className="mb-8 flex bg-white rounded-lg shadow-md p-12">
          <img src={speaker.image} alt={speaker.name} className="w-48 h-48 object-contain rounded-lg ml-0" />
          <div className="ml-4">
            <h2 className="text-3xl font-bold mb-1 RobotoText">{speaker.name}</h2>
            <p className="text-sm text-gray-600 RobotoText">{speaker.pronouns}</p>
            <p className="text-lg mb-2 RobotoText">{speaker.role}</p>
            <div className="flex flex-wrap gap-2 RobotoText">
            {iconConfigs.map((iconConfig) => (
              speaker.social[iconConfig.prop] && (
                <a
                  key={iconConfig.prop}
                  href={speaker.social[iconConfig.prop]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition duration-300 ease-in-out ${iconConfig.classes} hover:bg-opacity-100 hover:text-white`}
                >
                  <iconConfig.IconComponent className="w-5 h-5" />
                </a>
              )
            ))}
            </div>
            <div className="mt-4">
              <p className="text-lg RobotoText">{speaker.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {remainingSpeakers.map((speaker) => (
      <div key={speaker.name} className="mb-8 bg-white rounded-lg shadow-md p-12">
        <img src={speaker.image} alt={speaker.name} className="w-full h-48 object-contain rounded-lg mb-4" />
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-1 RobotoText">{speaker.name}</h2>
          <p className="text-sm text-gray-600 RobotoText">{speaker.pronouns}</p>
          <p className="text-lg mb-2 RobotoText">{speaker.role}</p>
          <div className="flex flex-wrap gap-2 justify-center RobotoText">
            {iconConfigs.map((iconConfig) => (
              speaker.social[iconConfig.prop] && (
                <a
                  key={iconConfig.prop}
                  href={speaker.social[iconConfig.prop]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition duration-300 ease-in-out ${iconConfig.classes} hover:bg-opacity-100 hover:text-white`}
                >
                  <iconConfig.IconComponent className="w-5 h-5" />
                </a>
              )
            ))}
          </div>
          <div className="mt-4">
            <p className="text-lg RobotoText">{speaker.description}</p>
          </div>
        </div>
      </div>
    ))}
      </div>
    </div>
  );
};

export default SpeakersPage;