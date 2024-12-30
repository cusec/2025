import React from 'react';
import iconConfigs from './IconConfigs';
import Speaker from './Speaker';

const KeynoteSpeakerCard = ({ speaker }: { speaker: Speaker }) => {
    return (
      <div className="mb-8 flex flex-col bg-white rounded-lg shadow-md p-12 md:flex-row">
        <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-72 object-contain rounded-lg mb-4 md:w-72 md:mb-0"
        />
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
    );
  };

export default KeynoteSpeakerCard;