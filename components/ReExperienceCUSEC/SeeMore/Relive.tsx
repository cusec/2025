import Head from 'next/head';
import Image from 'next/image';
import images from './relive2024.json';

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Relive CUSEC 2024</title>
      </Head>
      <main className="container mx-auto p-4 md:p-6 pt-12">
        <h2 className="text-5xl md:text-7xl pb-6 pt-6 font-bold purpleText mb-2 text-center">
          RE-EXPERIENCE CUSEC
        </h2>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md">
              <Image
                src={image.url}
                alt={image.alt}
                layout="responsive"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}