import speakersData from "@/components/Speakers/speakers.json";
import Speaker from "@/components/Speakers/Speaker";

export const speakers = speakersData as Speaker[];

export function speakerSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findSpeaker(slug: string): Speaker | undefined {
  return speakers.find((speaker) => speakerSlug(speaker.name) === slug);
}
