import Image from "next/image";
import Link from "next/link";

export default function ReExperienceCUSEC() {
  return (
    <div className="flex flex-col items-center w-full bg-white py-8 px-4 md:px-0">
      {/* Heading */}
      <h2 className="text-5xl font-bold purpleText mb-2">RE-EXPERIENCE CUSEC</h2>
      <p className="text-center textFont mb-6">
        Explore the image gallery and relive your favourite CUSEC moments.
      </p>

      {/* Collage Layout */}
      <div className="w-full max-w-3xl mb-6 grid gap-4">
        {/* Top Image Spanning Full Width */}
        <div className="col-span-full">
          <Image
            src="/images/2024/main.JPG"
            alt="CUSEC group photo"
            width={800}
            height={400}
            layout="responsive"
            className="object-cover"
          />
        </div>

        {/* Collage of Smaller Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src="/images/2024/devsden.JPG"
            alt="Gallery photo 1"
            width={400}
            height={400}
            layout="responsive"
            className="object-cover w-full h-auto"
          />
          <Image
            src="/images/2024/kareoke.JPG"
            alt="Gallery photo 2"
            width={400}
            height={400}
            layout="responsive"
            className="object-cover w-full h-auto"
          />
          <Image
            src="/images/2024/rbcsponsorbooth.JPG"
            alt="Gallery photo 3"
            width={400}
            height={400}
            layout="responsive"
            className="object-cover w-full h-auto"
          />
          <Image
            src="/images/2024/ucalgary.JPG"
            alt="Gallery photo 4"
            width={400}
            height={400}
            layout="responsive"
            className="object-cover w-full h-auto"
          />
          <Image
            src="/images/2024/team.JPG"
            alt="Gallery photo 5"
            width={400}
            height={400}
            layout="responsive"
            className="object-cover w-full h-auto"
          />
          <Image
            src="/images/2024/hype.JPG"
            alt="Gallery photo 6"
            width={400}
            height={400}
            layout="responsive"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* "See More" Button 
      <Link href="/gallery">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          SEE MORE
        </button>
      </Link>
    */}
      </div>
  );
}
