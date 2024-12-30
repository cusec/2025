import React from 'react';

const SpeakerHero = () => {
  return (
    <div className="relative">
        <div className="relative z-10">
          <div className="speaker-hero py-8">
            <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-8xl lg:text-10xl font-bold purpleText mb-4 md:mb-6 leading-tight">
                Meet Our Speakers
            </h1>
            <div className="h-1 w-20 bg-[#6C6BD1] mb-4 md:mb-6"></div>
            <p className="md:text-lg mb-4 md:mb-6 text-dark-blue RobotoText">
                Our speakers are at the heart of CUSEC. These thought leaders, innovators and pioneers in their fields.
                Their insights and experiences will inspire you to think differently and challenge the status quo.
                They allow CUSEC to showcase invaluable opportunities to dive deep into the latest trends and emerging technology,
                forming CUSEC into an essential event for anyone eager to shapre the future of technology and innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                <div className="aspect-w-1 aspect-h-1">
                <img
                    src="/images/speakers/carousel/carousel1.webp"
                    alt="Speaker 1"
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                <img
                    src="/images/speakers/carousel/carousel2.jpg"
                    alt="Speaker 2"
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                <img
                    src="/images/speakers/carousel/carousel3.jpeg"
                    alt="Speaker 3"
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                <img
                    src="/images/speakers/carousel/carousel4.jpeg"
                    alt="Speaker 4"
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                <img
                    src="/images/speakers/carousel/carousel5.jpg"
                    alt="Speaker 5"
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                <img
                    src="/images/speakers/carousel/carousel6.jpg"
                    alt="Speaker 6"
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                <img
                    src="/images/speakers/carousel/carousel7.jpg"
                    alt="Speaker 7"
                    className="object-cover rounded-lg w-full h-full"
                    loading="lazy"
                />
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            );
            };

            export default SpeakerHero;