import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import iconConfigs from "@/components/Speakers/IconConfigs";
import { speakers, findSpeaker, speakerSlug } from "@/lib/speakers";

export function generateStaticParams() {
  return speakers.map((speaker) => ({ slug: speakerSlug(speaker.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const speaker = findSpeaker(slug);
  if (!speaker) return {};

  const role = speaker.role ? `${speaker.role}. ` : "";
  return {
    title: `${speaker.name} | CUSEC 2025 Speakers`,
    description: `${role}${speaker.name} spoke at CUSEC 2025, the 24th Canadian University Software Engineering Conference.`,
    openGraph: {
      title: `${speaker.name} at CUSEC 2025`,
      description: `${role}${speaker.name} spoke at CUSEC 2025.`,
      images: [{ url: speaker.image, alt: speaker.name }],
    },
  };
}

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const speaker = findSpeaker(slug);
  if (!speaker) notFound();

  const socials = iconConfigs
    .map((config) => speaker.social[config.prop])
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: speaker.name,
    image: `https://2025.cusec.net${speaker.image}`,
    ...(speaker.role ? { jobTitle: speaker.role } : {}),
    ...(speaker.social.website ? { url: speaker.social.website } : {}),
    sameAs: socials,
    performerIn: {
      "@type": "Event",
      "@id": "https://2025.cusec.net/#event",
      name: "CUSEC 2025",
      url: "https://2025.cusec.net",
    },
  };

  return (
    <main className="w-full min-h-screen mt-[191px] pt-8 pb-24 px-4 flex justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8 md:p-12">
        <Link
          href="/speakers"
          className="RobotoText text-purple-600 hover:underline"
        >
          &larr; All CUSEC 2025 speakers
        </Link>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={speaker.image}
          alt={`${speaker.name}, ${speaker.type} at CUSEC 2025`}
          className="w-full h-64 object-contain rounded-lg my-6"
        />

        <h1 className="text-4xl font-bold mb-1 RobotoText">{speaker.name}</h1>
        {speaker.pronouns && (
          <p className="text-sm text-gray-600 RobotoText mb-2">
            {speaker.pronouns}
          </p>
        )}
        {speaker.role && (
          <p className="text-lg RobotoText mb-6">{speaker.role}</p>
        )}

        <p className="RobotoText whitespace-pre-wrap">{speaker.description}</p>

        <div className="flex flex-wrap gap-2 RobotoText mt-6">
          {iconConfigs.map(
            (iconConfig) =>
              speaker.social[iconConfig.prop] && (
                <a
                  key={iconConfig.prop}
                  href={speaker.social[iconConfig.prop]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${speaker.name} on ${iconConfig.prop}`}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition duration-300 ease-in-out ${iconConfig.classes} hover:bg-opacity-100 hover:text-white`}
                >
                  <iconConfig.IconComponent className="w-5 h-5" />
                </a>
              )
          )}
        </div>

        <p className="RobotoText mt-8 text-gray-700">
          CUSEC 2025 was held January 9&ndash;11, 2025. The next edition is{" "}
          <a
            href="https://2027.cusec.net"
            className="text-purple-600 underline"
          >
            CUSEC 2027
          </a>
          .
        </p>
      </div>
    </main>
  );
}
