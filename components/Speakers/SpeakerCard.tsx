import React, { useState } from 'react';
import iconConfigs from './IconConfigs';
import Speaker from './Speaker';

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md p-12 relative">
      <img src={speaker.image} alt={speaker.name} className="w-full h-48 object-contain rounded-lg mb-4" />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-1 RobotoText">{speaker.name}</h2>
        <p className="text-sm text-gray-600 RobotoText">{speaker.pronouns}</p>
        <p className="text-lg mb-2 RobotoText">{speaker.role}</p>
        <div className="flex flex-wrap gap-2 justify-center RobotoText mb-4">
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
      </div>
      <button
        className="RobotoText flex items-center justify-center w-24 h-10 rounded-full border-2 border-purple-600 text-purple-600 bg-white transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white absolute bottom-4 left-1/2 transform -translate-x-1/2"
        onClick={() => setShowMore(true)}
      >
        See More
      </button>
      {showMore && (
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 transition duration-300 ease-in-out ${showMore ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-lg shadow-md p-12 relative w-11/12 md:w-7/10 lg:w-4/5 xl:w-3/4 2xl:w-2/3 mx-auto z-50">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-600 text-red-600 bg-white transition duration-300 ease-in-out hover:bg-red-600 hover:text-white absolute top-4 right-4 z-50"
              onClick={() => setShowMore(false)}
            >
              X
            </button>
            <h2 className="text-3xl font-bold mb-4 RobotoText">{speaker.name}</h2>
            <p className="text-m RobotoText">{speaker.description}</p>
            <div className="flex flex-wrap gap-2 justify-center RobotoText mt-4">
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
            <button
              className="flex items-center justify-center w-24 h-10 rounded-full border-2 border-purple-600 text-purple-600 bg-white transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white mt-4"
              onClick={() => setShowMore(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakerCard;