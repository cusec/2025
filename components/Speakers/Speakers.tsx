import React from 'react';
import speakers from './speakers.json';

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

const SpeakersPage = () => {
  const keynotes = speakers.filter((speaker) => speaker.type === 'keynote');
  const remainingSpeakers = speakers.filter((speaker) => speaker.type !== 'keynote');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 RobotoText">Speakers</h1>
      {keynotes.map((speaker) => (
        <div key={speaker.name} className="mb-8 flex bg-white rounded-lg shadow-md p-4">
          <img src={speaker.image} alt={speaker.name} className="w-48 h-48 object-contain rounded-lg" />
          <div className="ml-4">
            <h2 className="text-3xl font-bold mb-2 RobotoText">{speaker.name}</h2>
            <p className="text-lg mb-2 RobotoText">{speaker.role}</p>
            <p className="text-lg mb-2 RobotoText">{speaker.pronouns}</p>
            <div className="flex flex-wrap gap-2 RobotoText">
              {speaker.social.twitter && (
                <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Twitter
                </a>
              )}
              {speaker.social.linkedin && (
                <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  LinkedIn
                </a>
              )}
              {speaker.social.github && (
                <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  GitHub
                </a>
              )}
              {speaker.social.website && (
                <a href={speaker.social.website} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {remainingSpeakers.map((speaker) => (
          <div key={speaker.name} className="bg-white rounded-lg shadow-md p-4">
            <img src={speaker.image} alt={speaker.name} className="w-48 h-48 object-contain rounded-lg mx-auto" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 RobotoText">{speaker.name}</h2>
              <p className="text-lg mb-2 RobotoText">{speaker.role}</p>
              <p className="text-lg mb-2 RobotoText">{speaker.pronouns}</p>
              <div className="flex flex-wrap gap-2 RobotoText">
                {speaker.social.twitter && (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Twitter
                  </a>
                )}
                {speaker.social.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    LinkedIn
                  </a>
                )}
                {speaker.social.github && (
                  <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    GitHub
                  </a>
                )}
                {speaker.social.website && (
                  <a href={speaker.social.website} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersPage;